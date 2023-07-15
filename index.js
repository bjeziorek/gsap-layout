gsap.from('.header', { duration: 1, y: '-100%', scale: 0.5, ease: 'bounce' });

gsap.from('button', { duration: 1, opacity: 0, delay: 1, stagger: .3 })
gsap.to('.p', {  opacity: 0, scale:0 })
gsap.from('p', { duration: 1, opacity: 0, delay: 2, stagger: .3 })

gsap.from('.left', { duration: 1, x: '-100%', scale: 0.5, ease: 'bounce' })
gsap.from('.main', { duration: 1, scale: 0.5, ease: 'bounce' })
gsap.from('.right', { duration: 1, x: '100%', scale: 0.5, ease: 'bounce' })

gsap.from('footer', { duration: 1, y: '100%', ease: 'bounce' })

gsap.to(".ball-1", { duration: 10, x: 100, y: 300, repeat: -1, yoyo: true });
gsap.to(".ball-2", { duration: 12, x: 700, y: -30, repeat: -1, yoyo: true });
gsap.to(".ball-3", { duration: 10, x: 500, y: 50, repeat: -1, yoyo: true });

document.querySelector('aside').addEventListener('mouseenter', () => {
    gsap.to('.left', { zIndex: 2 })
    gsap.to('.left', { duration: 1, scale: 1.2, x: 30, ease: 'bounce', backgroundColor: 'black', color: '#cfbaa6' })
})
document.querySelector('.left').addEventListener('mouseenter', () => {
    gsap.to('.left', { zIndex: 2 })
    gsap.to('.left', { duration: 1, scale: 1.2, x: 30, ease: 'bounce', backgroundColor: 'black', color: '#cfbaa6' })
})

document.querySelector('.left').addEventListener('mouseleave', () => {

    gsap.to('.left', { duration: 1, scale: 1, x: 0, ease: 'bounce', backgroundColor: "#685858", color: 'aqua' })
})


document.querySelector('.right').addEventListener('mouseenter', () => {
    gsap.to('.right', { zIndex: 2 })
    gsap.to('.right', { duration: 1, scale: 1.2, x: -30, ease: 'bounce', backgroundColor: 'black', color: '#cfbaa6' })
})

document.querySelector('.right').addEventListener('mouseleave', () => {

    gsap.to('.right', { duration: 1, scale: 1, x: 0, ease: 'bounce', backgroundColor: "#685858", color: 'aqua' })
})



gsap.to('btn-1',{color:'white',scale:1.3})


document.querySelector('.btn-1').addEventListener('mouseenter', () => {
    gsap.to('.btn-1', { duration: 1, scale: 1.5, ease: 'bounce', color: '#cfbaa6' })
    gsap.to('.ball', { duration: 1, ease: 'bounce', backgroundColor: '#cfbaa6' })

})

document.querySelector('.btn-2').addEventListener('mouseenter', () => {
    gsap.to('.btn-2', { duration: 1, scale: 1.5, ease: 'bounce', color: '#cfbaa6' })
    gsap.to('.ball', { duration: 1, ease: 'bounce', backgroundColor: '#cfbaa6' })

})

document.querySelector('.btn-3').addEventListener('mouseenter', () => {
    gsap.to('.btn-3', { duration: 1, scale: 1.5, ease: 'bounce', color: '#cfbaa6' })
    gsap.to('.ball', { duration: 1, ease: 'bounce', backgroundColor: '#cfbaa6' })

})

document.querySelector('.btn-1').addEventListener('mouseleave', () => {
    gsap.to('.btn-1', { duration: 1, scale: 1, ease: 'bounce', color: 'aqua' })
    gsap.to('.ball', { duration: 1, ease: 'bounce', backgroundColor: '#00adad' })
})

document.querySelector('.btn-2').addEventListener('mouseleave', () => {
    gsap.to('.btn-2', { duration: 1, scale: 1, ease: 'bounce', color: 'aqua' })
    gsap.to('.ball', { duration: 1, ease: 'bounce', backgroundColor: '#00adad' })
})

document.querySelector('.btn-3').addEventListener('mouseleave', () => {
    gsap.to('.btn-3', { duration: 1, scale: 1, ease: 'bounce', color: 'aqua' })
    gsap.to('.ball', { duration: 1, ease: 'bounce', backgroundColor: '#00adad' })
})

document.querySelector('.btn-1').addEventListener('click',()=>{
    gsap.to('.main-1',{duration:1,scale:1,opacity:1,ease:'bounce'})
    gsap.to('.main-2',{duration:.5,scale:0,opacity:0})
    gsap.to('.main-3',{duration:.5,scale:0,opacity:0})
    gsap.effects.swapText('main', {text: "new text"});
})

document.querySelector('.btn-2').addEventListener('click',()=>{
    gsap.to('.main-1',{duration:.5,scale:0,opacity:0})
    gsap.to('.main-2',{duration:1,scale:1,opacity:1,ease:'bounce'})
    gsap.to('.main-3',{duration:.5,scale:0,opacity:0})
    gsap.effects.swapText('main', {text: "new text"});
})
document.querySelector('.btn-3').addEventListener('click',()=>{
    gsap.to('.main-1',{duration:.5,scale:0,opacity:0})
    gsap.to('.main-2',{duration:.5,scale:0,opacity:0})
    gsap.to('.main-3',{duration:1,scale:1,opacity:1,ease:'bounce'})
    gsap.effects.swapText('main', {text: "new text"});
})
