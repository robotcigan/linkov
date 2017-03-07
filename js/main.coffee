$('.js-open-menu').on 'click', ->
	# $('.menu').addClass 'menu--active'
	$('.menu').slideDown()
	# $('.menu__circle').addClass 'menu__circle--active'


$('.js-close-menu').on 'click', ->
	$('.menu').slideUp()
	# $('.menu').removeClass 'menu--active'
	# $('.menu__circle').removeClass 'menu__circle--active'


index = 0

$('body').on 'mousewheel', (event) ->
    # console.log(e.deltaX, e.deltaY, e.deltaFactor)

    # count = $('.main-content .slide').eq()

	if (event.deltaY < 0)
		index++
		if (index >= 5)
			index = 5
	else
		index--
		if (index <= 0)
			index = 0
	
	console.log(index)

	$('.main-content .slide').eq(0).removeClass 'slide--active'
	$('.main-content .slide').eq(1).addClass 'slide--active'