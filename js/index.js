$(function() {
	//顶部的鼠标移入
	//1.发声的目标元素 a
	//2.什么事件 mouseover，mouseout
	//3.改变连接颜色
	$('.top a').mouseover(function() {
		$(this).css('color', '#fff');
	});
	$('.top a').mouseout(function() {
		$(this).css('color', '#a4b094')
	});

	$('.shopCar').mouseover(function() {
		$('.goods').stop(true, false).slideDown()
	});
	$('.shopCar').mouseout(function() {
		$('.goods').stop(true, false).slideUp()
	});
	//表单的输入移入效果
	var flag = true;
	$('.ser1').mouseover(function() {
		if(flag) {
			$('.ser1 input').css('border', '1px solid #b0b0b0');
			$('.ser2').css('border', '1px solid #b0b0b0').css('borderLeft', 'none');
		}
	}).mouseout(function() {
		if(flag) {
			$('.ser1 input').css('border', '1px solid #ccc');
			$('.ser2').css('border', '1px solid #ccc').css('borderLeft', 'none');
		}
	})
	//热门搜索的移入效果
	$('.hot a').mouseover(function() {
		$(this).css({
			'color': '#fff',
			'background': 'orange'
		})
	}).mouseout(function() {
		$(this).css({
			'color': '#000',
			'background': 'rgb(238, 238, 238)'
		})
	})
	$('.ser2').mouseover(function() {
		if(flag) {
			$(this).css({
				'color': '#fff',
				'background': 'orange'
			})
			$('.ser1 input').css('border', '1px solid #b0b0b0');
		}
	}).mouseout(function() {
		if(flag) {
			$(this).css({
				'color': '#000',
				'background': '#fff'
			})
			$('.ser1 input').css('border', '1px solid #e0e0e0');
		}
	})
	//表单获取焦点的时候
	$('.ser1 input').focus(function() {
		flag = false;
		$(this).css('border-color', 'orange');
		$('.ser2').css('border-color', 'orange');
		$('.keywordList').show().css('border-color', 'orange');
	}).blur(function() {
		flag = true;
		$(this).css('border-color', '#ccc')
		$('.ser2').css('border-color', '#ccc');
		$('.keywordList').hide().css('border-color', '#ccc');
	})

	//二级导航下拉列表 导航效果开始
	$('.nav li').mousemove(function() {
		$(this).children('a').css('color', '#ff6700');
		if($(this).index() < 7) {
			$('.select').removeClass('hide');
			$('.select').slideDown().finish();
			$('.select').find('ul').addClass('hide');
			$('.select').find('ul').eq($(this).index()).removeClass('hide');
		}
	}).mouseout(function() {
		$(this).children('a').css('color', '#333333');
	})
	$('.nav').mouseout(function() {
		$('.select').slideUp();
	})
	$('.select').find('ul').mouseover(function() {
		$('.select').slideDown().finish();
	}).mouseout(function() {
		$('.select').slideUp();
	})

	//轮播图的效果
	var num = 0;
	var timer;
	timer = setInterval(function() {
		num++;
		if(num > 4) {num = 0;}
		displayImg()
	}, 4000)
	$('.banner').mouseover(function() {
		clearInterval(timer);
	}).mouseout(function() {
		timer = setInterval(function() {
			num++;
			if(num > 4) {num = 0;}
			displayImg()
		}, 4000)
	})
	$('.round li').mousemove(function() {
		num = $(this).index();
		displayImg();
	})
	$('.direcL').click(function() {
		//上一张		
		num = num - 1;
		if(num < 0) {
			num = 4;
		}
		displayImg();
	})
	$('.direcR').click(function() {
		//下一张
		num = num + 1;
		if(num > 4) {
			num = 0;
		}
		displayImg();
	})
	function displayImg() {
		$('.round li').eq(num).css('background', 'orange').siblings().attr('style', '');
		$('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
	}
	//左侧隐藏的导航
	$('.navL li').mousemove(function() {
		$(this).css('background', '#ff6700');
		$('.navHide').removeClass('hide');
		$('.ulHide').addClass('hide');
		$('.ulHide').eq($(this).index()).removeClass('hide');
	}).mouseout(function() {
		$(this).css('background', 'transparent');
	})
	//鼠标移出二级导航范围，消失
	$('.navL').mouseout(function() {
		$('.navHide').addClass('hide')
	})
	//用户移入三级导航
	$('.ulHide').mouseover(function() {
		$('.navHide').removeClass('hide');
		$('.navL li').eq($(this).index()).css('background', '#ff6700');
	}).mouseout(function() {
		$('.navHide').addClass('hide');
		$('.navL li').eq($(this).index()).css('background', 'transparent');
	})
	//明星产品
	$('.next').click(function() {
		var a = $('.scroll').css("left");
		if(a = '0px') {
			$('.scroll').animate({left: "-1226px"});
		};
	});
	$('.prev').click(function() {
		var a = $('.scroll').css("left");
		if(a = '-1226px') {
			$('.scroll').animate({left: '0px'});
		}
	});
	//明星产品轮播
	var Pturn = true;
	var timePro = setInterval(function() {
		starLb ();
	}, 3000)
	$('.scroll').mousemove(function() {
		clearInterval(timePro);
	}).mouseout(function() {
		timePro = setInterval(function() {
			starLb ();
		}, 3000)
	})
	function starLb () {
		if(Pturn == true) {
			var a = $('.scroll').css("left");
			if(a = '0px') {
				$('.scroll').css('left', '-1226px')
				Pturn = false;
			};
		} else {
			var a = $('.scroll').css("left");
			if(a = '-1226px') {
				$('.scroll').css('left', '0px')
				Pturn = true;
			};
		}
	}	
	//中间部分
    //能动的评价
    $('.pos li').mouseover(function () {
    	$(this).children('.cang').stop(true, false).slideDown('fast');
    }).mouseout(function () {
    	$(this).children('.cang').stop(true, false).slideUp('fast');
    })
    //ul切换
    $('.ding >ul a').mouseover(function() {
		$(this).parents().children('.pos').eq($(this).index()).removeClass('hide').siblings('.pos').addClass('hide')
		$(this).css({
			'color': 'orange',
			'border-bottom': '2px solid orange'
		}).siblings('a').css({
			'color': 'black',
			'border-bottom': 'none'
		})
	})    
	//内容块
	//切换按钮
	$('.move').mouseover(function() {
		$(this).find('section').removeClass('hide')
	}).mouseout(function() {
		$(this).find('section').addClass('hide')
	})
//	切换
    $('.move .nRnext').click(function() {
    	if ($(this).siblings('.tw').eq(3).attr('class') == 'tuwen4 tw hide') {
    		$(this).siblings('.tw').not('.hide').addClass('hide').next().removeClass('hide');
    	    $(this).siblings('ul').children().filter('.liYs').next().addClass('liYs').prev().removeClass('liYs');
    	}
	})
    $('.move .nRprev').click(function() {
    	if ($(this).siblings('.tw').eq(0).attr('class') == 'tuwen1 tw hide') {
    		$(this).siblings('.tw').not('.hide').addClass('hide').prev().removeClass('hide');
    	    $(this).siblings('ul').children().filter('.liYs').prev().addClass('liYs').next().removeClass('liYs');
    	}
	})   
    $('.move ul li').click(function() {
    	    $(this).parent().siblings('.tw').eq($(this).index()).removeClass('hide').siblings('.tw').addClass('hide');
    	    $(this).addClass('liYs').siblings().removeClass('liYs');
    })
	//推荐	
	var time2;
	var num2 = 0;
	$('.tjNext').click(function() {
		$('.tj2').removeClass('hide1');
		$('.tj1').addClass('hide1');
	})
	$('.tjPrve').click(function() {
		$('.tj1').removeClass('hide1');
		$('.tj2').addClass('hide1');
	})
    //推荐轮播
	time2 = setInterval(function() {tjLb()}, 3000)
	$('.tj').mouseover(function() {
		clearInterval(time2);
	}).mouseout(function() {
		time2 = setInterval(function() {tjLb()}, 3000)
	})
	function tjLb () {
		num2++;
		if(num2 == 1) {$('.tj2').removeClass('hide1');$('.tj1').addClass('hide1');};
		if(num2 == 2) {$('.tj1').removeClass('hide1');$('.tj2').addClass('hide1');num2 = 0;}
	}
})