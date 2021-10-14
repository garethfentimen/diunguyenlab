function scaleFont() {
    if (typeof window !== `undefined`) {
        function recalc() {
            const documentEl = document.documentElement;
            var clientWidth = documentEl && documentEl.clientWidth;
            if (!clientWidth) {
                return;
            }

            var coeff = clientWidth > 1200 ? 0.006666666666666667 : 0.01166666666666667;

            documentEl.style.fontSize = (coeff * clientWidth) + 'px';
            documentEl.style.display = 'none';
            //documentEl.clientWidth; // force re-layout in android
            documentEl.style.display = "";
        }

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

export default scaleFont;