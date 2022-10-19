import { base, collection } from "./shadows";

const currentValue = "vBoxShadowValue";

const baseBoxShadow = (el: any) => {
  if (el === undefined) {
    el = base;
  }

  if (el !== undefined) {
    const isInset = (el: any) => {
      if (isNaN(el.inset) || el.inset === false) {
        return "";
      } else {
        return "inset ";
      }
    };

    const getColor = (el: any) => {
      if (el.color !== "transparent") {
        return " rgb(" + el.color + " / " + el.opacity + "%)";
      } else {
        return "transparent";
      }
    };

    const shadow = (el: any) => {
      return (
        isInset(el) +
        el.offsetX +
        " " +
        el.offsetY +
        " " +
        el.blur +
        " " +
        el.spread +
        " " +
        getColor(el)
      );
    };

    if (el.multiple) {
      const em = el.multiple;

      return em
        .map(function (el: any) {
          return shadow(el);
        })
        .join(", ");
    } else {
      return shadow(el);
    }
  }
};

const numShadows = (el: any, bindings: any) => {
  const name = bindings.arg;
  const num = bindings.value;

  if (name) {
    const getElName = collection.find((el) => el.name === name);
    const setElStyle = {
      prop: "--box-shadow",
      val: baseBoxShadow(getElName),
    };

    el.style.setProperty(setElStyle.prop, setElStyle.val);
    el.setAttribute("data-shadow", name);
  } else {
    if (isNaN(num)) {
      return;
    } else if (num !== el[currentValue]) {
      el[currentValue] = num;

      if (!bindings) {
        console.warn("bindings is not found");
      } else {
        const setElStyle = {
          prop: "--box-shadow",
          val: baseBoxShadow(collection[num]),
        };

        el.style.setProperty(setElStyle.prop, setElStyle.val);
        el.setAttribute("data-shadow", num);
      }
    }
  }
};

function getRootWindow(): Window {
  return window;
}

function getRootDocument(): Document {
  return getRootWindow().document;
}

const VueBoxShadow = {
  install(app: any, options: any) {
    options = Object.assign(
      { useClass: false, shadowBaseCustom: baseBoxShadow(undefined) },
      options
    );

    const styles = `
      --box-shadow: ${options.shadowBaseCustom};
      box-shadow: var(--box-shadow);`;

    if (options.useClass) {
      const doc = getRootDocument().styleSheets;
      const rule = `.vue-box-shadow{${styles}}`;

      if (doc && doc[1]) {
        doc.item(0)?.insertRule(rule);
      } else {
        const styleTag = getRootDocument().createElement("style");

        styleTag.setAttribute("type", "text/css");
        styleTag.appendChild(getRootDocument().createTextNode(rule));
        getRootDocument().head.appendChild(styleTag);
      }
    }

    app.directive("box-shadow", {
      created(el: any) {
        if (!options.useClass) {
          el.style.cssText += styles;
        } else {
          el.classList.add("vue-box-shadow");
        }
      },
      mounted: (el: any, bindings: any) => numShadows(el, bindings),
      updated: (el: any, bindings: any) => numShadows(el, bindings),
      componentUpdated: (el: any, bindings: any) => numShadows(el, bindings),
    });
  },
};

export default VueBoxShadow;