        // Grab what we need
        const crazyButtons = document.querySelectorAll('.btn-crazy');

        // Functions
        function goCrazy() {
            const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
            const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);
            this.style.left = offsetLeft + 'px';
            this.style.top = offsetTop + 'px';
        }

        // Add event listeners
        crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));
