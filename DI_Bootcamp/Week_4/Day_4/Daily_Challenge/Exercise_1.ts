<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chocolate Facts</title>
    <style>
        .fade-out {
            animation: fadeOut 2s forwards;
        }

        @keyframes fadeOut {
            to {
                opacity: 0;
            }
        }
    </style>
</head>
<body>
    <article>
        <h1> Some Facts </h1>
        <h2> The Chocolate </h2>
        <h3> History of the chocolate </h3>
        <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
        Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
        <p> After the European discovery of the Americas, chocolate became 
        very popular in the wider world, and its demand exploded. </p>
        <p> Chocolate has since become a popular food product that millions enjoy every day, 
        thanks to its unique, rich, and sweet taste.</p> 
        <p> But what effect does eating chocolate have on our health?</p> 
    </article>
    <button id="boldButton">Make Text Bold</button>

    <script>
        
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
    </script>
</body>
</html>
