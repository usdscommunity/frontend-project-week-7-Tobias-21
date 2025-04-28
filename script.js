

document.addEventListener('DOMContentLoaded', function () {


    const media_querie = window.matchMedia('(max-width:600px)');

    let nav = document.querySelector("nav")

    const ul = document.querySelector("ul")

    const image1 = document.querySelector("header")
    const transform = document.querySelector("img[alt='transform']")
    const stand_out = document.querySelector("img[alt='stand-out']")
    const div2 = document.querySelector(".div2")
    const div3 = document.querySelector(".div3")
    const milk = document.querySelector("img[alt='milk']")
    const orange = document.querySelector("img[alt='orange']")
    const cone = document.querySelector("img[alt='cone']")
    const sugar = document.querySelector("img[alt='sugar']")




    setupImage(media_querie)
    media_querie.addEventListener('change', setupImage)

    img_mobile(media_querie)
    media_querie.addEventListener('change', img_mobile)

    function setupImage(e) {
        let hambuger = document.querySelector(".image")
        if (e.matches) {

            if (!hambuger) {

                ul.style.display = "none"

                const img = document.createElement("img")
                img.src = "images/icon-hamburger.svg"
                img.style.width = "30px"
                img.style.cursor = "pointer"
                img.className = "image"


                nav.appendChild(img)
                hambuger = img

            }

            hambuger.onclick = function () {
                if (ul.style.display === "none") {
                    ul.style.display = "block"
                    ul.style.position = "absolute"
                    ul.style.right = "3em"
                    ul.style.top = "5em"
                    ul.style.color = "black"
                    ul.style.alignContent = "center"
                    ul.style.padding = "3em"
                    ul.style.backgroundColor = "white"



                }
                else {
                    ul.style.display = "none"
                }
            }

        } else {

            if (hambuger) {
                hambuger.remove();
            }

            ul.style.display = "flex"
            ul.style.transform = 'translateY(0)'

        }
    }

    function img_mobile(e) {
        if (e.matches) {
            image1.style.backgroundImage = "images/mobile/image-header.jpg"


            transform.src = "images/mobile/image-transform.jpg"
            stand_out.src = "images/mobile/image-stand-out.jpg"

            div2.style.backgroundImage = "images/mobile/image-graphic-design.jpg"
            div3.style.backgroundImage = "images/mobile/image-photography.jpg"

            milk.src = "images/mobile/image-gallery-milkbottles.jpg"
            orange.src = "images/mobile/image-gallery-orange.jpg"
            cone.src = "images/mobile/image-gallery-cone.jpg"
            sugar.src = "images/mobile/image-gallery-sugar-cubes.jpg"




        }
    }
})

