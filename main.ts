input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(999)
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
    images.createBigImage(`
        . . . . . . . . # #
        . . # # . . . . # #
        . . # # . . . . . .
        . . . . . . . . . #
        . . . # # . # # . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . # #
        . . . . . # . . # #
        . . . . . # . . . .
        . . # # . . # . . #
        . . # # . # # # . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . # # . . .
        . . . . . # # . # .
        # # . . . . . . . .
        # # . . # # . . . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . # . . . # . . .
        . . # . . . # . # #
        . . . . . . # . # #
        . . . # # . . . . .
        . . . # # . . . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . # # . . . . .
        . . . # # . . . # #
        . . . . . . # . # #
        # # # . . . # . . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . # # #
        . . # # . . . # # #
        . . # # . . . # . .
        . . . . . . . # . .
        . . . . . . . # . .
        `).scrollImage(1, 200)
    images.createBigImage(`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . # # .
        . . . . . . . # # .
        `).scrollImage(1, 200)
})
basic.forever(function () {
	
})
