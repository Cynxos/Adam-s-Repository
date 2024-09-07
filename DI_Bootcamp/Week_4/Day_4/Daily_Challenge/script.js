        const h1Element = document.querySelector('h1');
        console.log(h1Element);

        const article = document.querySelector('article');
        const lastParagraph = article.querySelector('p:last-of-type');
        article.removeChild(lastParagraph);

        const h2Element = document.querySelector('h2');
        h2Element.addEventListener('click', () => {
            h2Element.style.backgroundColor = 'red';
        });

        const h3Element = document.querySelector('h3');
        h3Element.addEventListener('click', () => {
            h3Element.style.display = 'none';
        });

        const boldButton = document.getElementById('boldButton');
        boldButton.addEventListener('click', () => {
            const paragraphs = document.querySelectorAll('article p');
            paragraphs.forEach(p => {
                p.style.fontWeight = 'bold';
            });
        });

        h1Element.addEventListener('mouseover', () => {
            const randomSize = Math.floor(Math.random() * 101);
            h1Element.style.fontSize = `${randomSize}px`;
        });

        const secondParagraph = article.querySelectorAll('p')[1];
        secondParagraph.addEventListener('mouseover', () => {
            secondParagraph.classList.add('fade-out');
        });