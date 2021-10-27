function scaleFont() {
    if (typeof window !== `undefined`) {
        if (!document.addEventListener) {
            return;
        }

        // REM support?
        var div = document.createElement('div');
        div.setAttribute('style', 'font-size: 1rem');

        // abort if no support
        if (div.style.fontSize !== '1rem') {
            return;
        }

        window.addEventListener('resize', recalc, false);
        window.addEventListener('DOMContentLoaded', recalc, false);
    }
}

export function recalc() {
    const documentEl = document.documentElement;
    var clientWidth = documentEl && documentEl.clientWidth;
    if (!clientWidth) {
        return;
    }

    var coeff = clientWidth > 1200 ? 0.012668250 : 0.019;
    if (clientWidth < 768 ) {
        coeff = 0.025;
    }
    if (clientWidth < 500) {
        coeff = 0.04;
    }
    if (clientWidth > 1650) {
        coeff = 0.00966825019796; 
    }

    documentEl.style.fontSize = coeff * clientWidth + 'px';
    documentEl.style.display = 'none';
    //documentEl.clientWidth; // force re-layout in android
    documentEl.style.display = "";
}

export default scaleFont;