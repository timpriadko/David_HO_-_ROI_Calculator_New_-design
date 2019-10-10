 // Read more

 $(document).ready(function() {
     // Read more
     $("#toggle").click(function() {
         var elem = $("#toggle").text();
         if (elem == "Read More") {
             //Stuff to do when btn is in the read more state
             $("#toggle").text("Read Less");
             $("#text").slideDown();
         } else {
             //Stuff to do when btn is in the read less state
             $("#toggle").text("Read More");
             $("#text").slideUp();
         }
     });

    // Step-1 current year date/select
    $("#benchmark-year-select").children().each(function(i) {
        // console.log(this)
        if (i === 0) {
            $(this).text('Current Year ('+(new Date).getFullYear()+')');
        } else {
            $(this).text( +(new Date).getFullYear() - i );
        }
    });

    $("#calculate-roi-select").children().each(function(i) {
        if (i === 0) {
            $(this).text('Current Year ('+(new Date).getFullYear()+')');
        } else {
            $(this).text( +(new Date).getFullYear() - i );
        }
    });
    
    // Init custom select
    crear_select();

    // Step-2/Step-3/Step-4 column header year
    $(".current-year").text((new Date).getFullYear());
    $(".next-year").text((new Date).getFullYear() + 1);
    $(".year-after-next").text((new Date).getFullYear() + 2);
    $(".2years-after-next").text((new Date).getFullYear() + 3);
    
    // Step-4 validation
    var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var email = $(".email");
    var fist_name = $(".fist_name");
    var last_name = $(".last_name");

    // ADD ADDITIONAL CONTACT handler
    $('#add_contact_btn').click(function(e) {
        if ($('.email-result-inputs').length < 4) {
            $('.email-result-inputs')[$('.email-result-inputs').length - 1].insertAdjacentHTML('afterend', '<div class="email-result-inputs row">' +
            '<div><input type="text" class="first_name" placeholder="First Name"></div>' +
            '<div><input type="text" class="last_name" placeholder="Last Name"></div>' +
            '<div><input type="email" class="email" placeholder="Enter Email Address"></div>' +
        '</div>')
        }
    })

    // Submit handler
    $('#mail_btn').click(function(event) {
        event.preventDefault();
        // // Required fields validation
        $(".first_name").each(function(i) {
            switch ($(this).val().length === 0) {
                case true:
                        if (!$(this).hasClass('is-required')) {
                            $(this).addClass('is-required');
                            $(this).parent().append('<div class="valid-error">This field is required</div>');
                            $(this).css({'border-color' : '#ff0000', 'transition' : 'all 0.5s'});
                        }
                    break;
                case false:
                    if ($(this).next()) {
                        if ($(this).hasClass('is-required')) {
                            $(this).removeClass('is-required')
                            $(this).next().remove();
                            $(this).css({'border-color' : '', 'transition' : 'all 0.5s'});
                        }
                    }
                    break;
            }
        });
        $(".last_name").each(function(i) {
            switch ($(this).val().length === 0) {
                case true:
                        if (!$(this).hasClass('is-required')) {
                            $(this).addClass('is-required');
                            $(this).parent().append('<div class="valid-error">This field is required</div>');
                            $(this).css({'border-color' : '#ff0000', 'transition' : 'all 0.5s'});
                        }
                    break;
                case false:
                    if ($(this).next()) {
                        if ($(this).hasClass('is-required')) {
                            $(this).removeClass('is-required')
                            $(this).next().remove();
                            $(this).css({'border-color' : '', 'transition' : 'all 0.5s'});
                        }
                    }
                    break;
            }
        });
        // email validation
        $(".email").each(function(i) {
            // required validation
            switch ($(this).val().length === 0) {
                case true:
                    if ($(this).next()) {
                        if ($(this).hasClass('is-invalid')) {
                            $(this).removeClass('is-invalid');
                            $(this).next().remove();
                        }
                    }
                    $(this).hasClass('is-required') ? '' : $(this).parent().append('<div class="valid-error">This field is required</div>');
                    $(this).css({'border-color' : '#ff0000', 'transition' : 'all 0.5s'});
                    break;
                case false:
                    if ($(this).next()) {
                        if ($(this).hasClass('is-invalid')) {
                            $(this).removeClass('is-invalid');
                            $(this).next().remove();
                        }
                        if ($(this).hasClass('is-required')) {
                            $(this).removeClass('is-required')
                            $(this).next().remove();
                        }
                    }
                    break;
            }
            // init email validation
            if ($(this).val().length === 0) {
                $(this).addClass("is-required");
            } else if (regEmail.test($(this).val()) == false) {
                if (!$(this).hasClass('is-invalid')) {
                    $(this).addClass("is-invalid");
                    $(this).parent().append('<div class="valid-error">Email is invalid</div>');
                    $(this).css({'border-color' : '#ff0000', 'transition' : 'all 0.5s'});
                }
            } else {
                $(this).removeClass("is-required");
                $(this).removeClass("is-invalid");
                $(this).next() ? $(this).next().remove() : '';
                $(this).css({'border-color' : '', 'transition' : 'all 0.5s'});
            }
        });
      });
 });

 //  Show/hide steps evants

 // UI
 var bench_btn = document.getElementById("bench_btn");
 var fill_optional_btn = document.getElementById("fill_optional_btn");
 var skip_to_results_btn = document.getElementById("skip_to_results_btn");
 var skip_to_results_btn2 = document.getElementById("skip_to_results_btn2");
 var compute_results = document.getElementById("compute_results");
 var section1 = document.querySelector(".step-1");
 var section2 = document.querySelector(".step-2");
 var section3 = document.querySelector(".step-3");
 var section4 = document.querySelector(".step-4");
 var breadcrumb_step1 = document.getElementById("breadcrumb_step1");
 var breadcrumb_step2 = document.getElementById("breadcrumb_step2");
 var breadcrumb_step3 = document.getElementById("breadcrumb_step3");
 var breadcrumb_step4 = document.getElementById("breadcrumb_step4");
 var industry = document.getElementById("select_industry")

 bench_btn.addEventListener("click", function(e) {
    switch (text_1.value.length === 0) {
        case true:
            text_1.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_1.parentElement.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_1.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_1.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? text_1.parentElement.parentElement.lastElementChild.remove() : '';
            text_1.style = "";
            break;
    }
    switch (text_2.value.length === 0) {
        case true:
            text_2.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_2.parentElement.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_2.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_2.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? text_2.parentElement.parentElement.lastElementChild.remove() : '';
            text_2.style = "";
            break;
    }
    switch (text_3.value.length === 0) {
        case true:
            text_3.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_3.parentElement.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_3.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_3.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? text_3.parentElement.parentElement.lastElementChild.remove() : '';
            text_3.style = "";
            break;
    }
    switch (text_4.value.length === 0) {
        case true:
            text_4.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_4.parentElement.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_4.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_4.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? text_4.parentElement.parentElement.lastElementChild.remove() : '';
            text_4.style = "";
            break;
    }
     switch (industry.selectedIndex === 0) {
         case true:
             industry.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? '' : industry.parentElement.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
             industry.parentElement.style = 'border-color: #ff0000; transition: all 0.5s;';
             break;
         case false:
             industry.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? industry.parentElement.parentElement.lastElementChild.remove() : '';
             industry.parentElement.style = '';
             break;
     }

    if (text_1.value && text_2.value && text_3.value && text_4.value && industry.selectedIndex) {
        section1.classList.add("hidden");
        section2.classList.remove("hidden");
        breadcrumb_step1.classList.add("passed");
        breadcrumb_step1.classList.remove("active");
        if (breadcrumb_step3.classList.contains('active') || breadcrumb_step4.classList.contains('active')) {
            breadcrumb_step2.classList.add("passed");
        } else {
            breadcrumb_step2.classList.add("active");
        }
   
        breadcrumb_step2.classList.add("current-step");
        breadcrumb_step1.classList.remove("current-step");
        breadcrumb_step3.classList.remove("current-step");
        breadcrumb_step4.classList.remove("current-step");
        window.scrollTo(0, 0);
    }
 });

 fill_optional_btn.addEventListener("click", function(e) {
     switch (selec_1.selectedIndex === 0) {
         case true:
             selec_1.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? '' : selec_1.parentElement.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
             selec_1.parentElement.style = 'border-color: #ff0000; transition: all 0.5s;';
             break;
         case false:
             selec_1.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? selec_1.parentElement.parentElement.lastElementChild.remove() : '';
             selec_1.parentElement.style = '';
             break;
     }

     switch (selec_2.selectedIndex === 0) {
         case true:
             selec_2.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? '' : selec_2.parentElement.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
             selec_2.parentElement.style = 'border-color: #ff0000; transition: all 0.5s;';
             break;
         case false:
             selec_2.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? selec_2.parentElement.parentElement.lastElementChild.remove() : '';
             selec_2.parentElement.style = '';
             break;
     }

     switch (selec_3.selectedIndex === 0) {
         case true:
             selec_3.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? '' : selec_3.parentElement.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
             selec_3.parentElement.style = 'border-color: #ff0000; transition: all 0.5s;';
             break;
         case false:
             selec_3.parentElement.parentElement.lastElementChild.classList.contains('valid-error') ? selec_3.parentElement.parentElement.lastElementChild.remove() : '';
             selec_3.parentElement.style = '';
             break;
     }

    // Validation - Number of Full Time Employees (Mandatory)
    switch (text_7.value.length === 0) {
        case true:
            text_7.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_7.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_7.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_7.parentElement.lastElementChild.classList.contains('valid-error') ? text_7.parentElement.lastElementChild.remove() : '';
            text_7.style = "";
            break;
    }
    switch (text_8.value.length === 0) {
        case true:
            text_8.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_8.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_8.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_8.parentElement.lastElementChild.classList.contains('valid-error') ? text_8.parentElement.lastElementChild.remove() : '';
            text_8.style = "";
            break;
    }
    switch (text_9.value.length === 0) {
        case true:
            text_9.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_9.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_9.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_9.parentElement.lastElementChild.classList.contains('valid-error') ? text_9.parentElement.lastElementChild.remove() : '';
            text_9.style = "";
            break;
    }
    // Validation - Average annual salary per Full Time Employees (Mandatory)
    switch (text_11.value.length === 0) {
        case true:
            text_11.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_11.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_11.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_11.parentElement.lastElementChild.classList.contains('valid-error') ? text_11.parentElement.lastElementChild.remove() : '';
            text_11.style = "";
            break;
    }
    switch (text_12.value.length === 0) {
        case true:
            text_12.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_12.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_12.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_12.parentElement.lastElementChild.classList.contains('valid-error') ? text_12.parentElement.lastElementChild.remove() : '';
            text_12.style = "";
            break;
    }
    switch (text_13.value.length === 0) {
        case true:
            text_13.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_13.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_13.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_13.parentElement.lastElementChild.classList.contains('valid-error') ? text_13.parentElement.lastElementChild.remove() : '';
            text_13.style = "";
            break;
    }
    // Validation - Working days per year (Mandatory)
    switch (text_15.value.length === 0) {
        case true:
            text_15.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_15.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_15.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_15.parentElement.lastElementChild.classList.contains('valid-error') ? text_15.parentElement.lastElementChild.remove() : '';
            text_15.style = "";
            break;
    }
    switch (text_16.value.length === 0) {
        case true:
            text_16.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_16.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_16.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_16.parentElement.lastElementChild.classList.contains('valid-error') ? text_16.parentElement.lastElementChild.remove() : '';
            text_16.style = "";
            break;
    }
    switch (text_17.value.length === 0) {
        case true:
            text_17.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_17.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_17.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_17.parentElement.lastElementChild.classList.contains('valid-error') ? text_17.parentElement.lastElementChild.remove() : '';
            text_17.style = "";
            break;
    }
    // Validation - Average annual medical insurance spend per employee (Mandatory)
    switch (text_19.value.length === 0) {
        case true:
            text_19.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_19.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_19.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_19.parentElement.lastElementChild.classList.contains('valid-error') ? text_19.parentElement.lastElementChild.remove() : '';
            text_19.style = "";
            break;
    }
    switch (text_20.value.length === 0) {
        case true:
            text_20.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_20.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_20.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_20.parentElement.lastElementChild.classList.contains('valid-error') ? text_20.parentElement.lastElementChild.remove() : '';
            text_20.style = "";
            break;
    }
    switch (text_21.value.length === 0) {
        case true:
            text_21.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_21.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_21.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_21.parentElement.lastElementChild.classList.contains('valid-error') ? text_21.parentElement.lastElementChild.remove() : '';
            text_21.style = "";
            break;
    }
     if (text_11.value && text_12.value && text_13.value && text_15.value && text_16.value && text_17.value &&
         text_19.value && text_21.value && text_21.value && selec_1.selectedIndex && selec_2.selectedIndex && selec_3.selectedIndex) {
         section2.classList.add("hidden");
         section3.classList.remove("hidden");
         breadcrumb_step2.classList.add("passed");
         breadcrumb_step2.classList.remove("active");
         if (breadcrumb_step4.classList.contains('active')) {
             breadcrumb_step3.classList.add("passed");
         } else {
             breadcrumb_step3.classList.add("active");
         }
         breadcrumb_step3.classList.add("current-step");
         breadcrumb_step1.classList.remove("current-step");
         breadcrumb_step2.classList.remove("current-step");
         breadcrumb_step4.classList.remove("current-step");
         window.scrollTo(0, 0);
     }
    
 });

 compute_results.addEventListener("click", function(e) {
    switch (text_23.value.length === 0) {
        case true:
            text_23.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_23.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_23.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_23.parentElement.lastElementChild.classList.contains('valid-error') ? text_23.parentElement.lastElementChild.remove() : '';
            text_23.style = "";
            break;
    }
    switch (text_24.value.length === 0) {
        case true:
            text_24.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_24.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_24.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_24.parentElement.lastElementChild.classList.contains('valid-error') ? text_24.parentElement.lastElementChild.remove() : '';
            text_24.style = "";
            break;
    }
    switch (text_25.value.length === 0) {
        case true:
            text_25.parentElement.lastElementChild.classList.contains('valid-error') ? '' : text_25.parentElement.insertAdjacentHTML("beforeend", '<div class="valid-error">This field is required</div>');
            text_25.style = 'border-color: #ff0000; transition: all 0.5s;'
            break;
        case false:
            text_25.parentElement.lastElementChild.classList.contains('valid-error') ? text_25.parentElement.lastElementChild.remove() : '';
            text_25.style = "";
            break;
    }
    if (text_23.value && text_24.value && text_25.value) {
        section3.classList.add("hidden");
        section4.classList.remove("hidden");
        breadcrumb_step3.classList.add("passed");
        breadcrumb_step3.classList.remove("active");
        breadcrumb_step4.classList.add("active");
        breadcrumb_step4.classList.add("current-step");
        breadcrumb_step1.classList.remove("current-step");
        breadcrumb_step2.classList.remove("current-step");
        breadcrumb_step3.classList.remove("current-step");
        window.scrollTo(0, 0);
    }    
 });

 skip_to_results_btn.addEventListener("click", function(e) {
     section2.classList.add("hidden");
     section4.classList.remove("hidden");
     breadcrumb_step2.classList.add("passed");
     breadcrumb_step3.classList.add("passed");
     breadcrumb_step2.classList.remove("active");
     breadcrumb_step4.classList.add("active");
     breadcrumb_step4.classList.add("current-step");
     breadcrumb_step1.classList.remove("current-step");
     breadcrumb_step2.classList.remove("current-step");
     breadcrumb_step3.classList.remove("current-step");
     window.scrollTo(0, 0);
 });

 skip_to_results_btn2.addEventListener("click", function(e) {
     section3.classList.add("hidden");
     section4.classList.remove("hidden");
     breadcrumb_step3.classList.add("passed");
     breadcrumb_step3.classList.remove("active");
     breadcrumb_step4.classList.add("active");
     breadcrumb_step4.classList.add("current-step");
     breadcrumb_step1.classList.remove("current-step");
     breadcrumb_step2.classList.remove("current-step");
     breadcrumb_step3.classList.remove("current-step");
     window.scrollTo(0, 0);
 });

 breadcrumb_step1.addEventListener("click", function(e) {
     breadcrumb_step1.classList.add("current-step");
     breadcrumb_step2.classList.remove("current-step");
     breadcrumb_step3.classList.remove("current-step");
     breadcrumb_step4.classList.remove("current-step");
     if (breadcrumb_step1.classList.contains('passed') || breadcrumb_step1.classList.contains('active')) {
         section1.classList.remove("hidden");
         section2.classList.add("hidden");
         section3.classList.add("hidden");
         section4.classList.add("hidden");
         window.scrollTo(0, 0);
     }
 });

 breadcrumb_step2.addEventListener("click", function(e) {
     if (breadcrumb_step2.classList.contains('passed') || breadcrumb_step2.classList.contains('active')) {
         section2.classList.remove("hidden");
         section1.classList.add("hidden");
         section3.classList.add("hidden");
         section4.classList.add("hidden");
         breadcrumb_step2.classList.add("current-step");
         breadcrumb_step1.classList.remove("current-step");
         breadcrumb_step3.classList.remove("current-step");
         breadcrumb_step4.classList.remove("current-step");
         window.scrollTo(0, 0);
     }
 });

 breadcrumb_step3.addEventListener("click", function(e) {
     if (breadcrumb_step3.classList.contains('passed') || breadcrumb_step3.classList.contains('active')) {
         section3.classList.remove("hidden");
         section1.classList.add("hidden");
         section2.classList.add("hidden");
         section4.classList.add("hidden");
         breadcrumb_step3.classList.add("current-step");
         breadcrumb_step1.classList.remove("current-step");
         breadcrumb_step2.classList.remove("current-step");
         breadcrumb_step4.classList.remove("current-step");
         window.scrollTo(0, 0);
     }
 });

 breadcrumb_step4.addEventListener("click", function(e) {
     if (breadcrumb_step4.classList.contains('passed') || breadcrumb_step4.classList.contains('active')) {
         section4.classList.remove("hidden");
         section1.classList.add("hidden");
         section2.classList.add("hidden");
         section3.classList.add("hidden");
         breadcrumb_step4.classList.add("current-step");
         breadcrumb_step1.classList.remove("current-step");
         breadcrumb_step2.classList.remove("current-step");
         breadcrumb_step3.classList.remove("current-step");
         window.scrollTo(0, 0);
     }
 });

 // Custom Select
//  window.onload = function() {
//      crear_select();
//  }

 function isMobileDevice() {
     return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
 };


 var li = new Array();

 function crear_select() {
     var div_cont_select = document.querySelectorAll("[data-mate-select='active']");
     var select_ = '';
     for (var e = 0; e < div_cont_select.length; e++) {
         div_cont_select[e].setAttribute('data-indx-select', e);
         div_cont_select[e].setAttribute('data-selec-open', 'false');
         var ul_cont = document.querySelectorAll("[data-indx-select='" + e + "'] > .cont_list_select_mate > ul");
         select_ = document.querySelectorAll("[data-indx-select='" + e + "'] >select")[0];
         if (isMobileDevice()) {
             select_.addEventListener('change', function() {
                 _select_option(select_.selectedIndex, e);
             });
         }
         var select_optiones = select_.options;
         document.querySelectorAll("[data-indx-select='" + e + "']  > .selecionado_opcion ")[0].setAttribute('data-n-select', e);
         document.querySelectorAll("[data-indx-select='" + e + "']  > .icon_select_mate ")[0].setAttribute('data-n-select', e);
         for (var i = 0; i < select_optiones.length; i++) {
             li[i] = document.createElement('li');
             if (select_optiones[i].selected == true || select_.value == select_optiones[i].innerHTML) {
                 li[i].className = 'active';
                 document.querySelector("[data-indx-select='" + e + "']  > .selecionado_opcion ").innerHTML = select_optiones[i].innerHTML;
             };
             li[i].setAttribute('data-index', i);
             li[i].setAttribute('data-selec-index', e);
             // funcion click al selecionar 
             li[i].addEventListener('click', function() { _select_option(this.getAttribute('data-index'), this.getAttribute('data-selec-index')); });

             li[i].innerHTML = select_optiones[i].innerHTML;
             ul_cont[0].appendChild(li[i]);

         }; // Fin For select_optiones
     }; // fin for divs_cont_select
 } // Fin Function 



 var cont_slc = 0;

 function open_select(idx) {
     var idx1 = idx.getAttribute('data-n-select');
     var ul_cont_li = document.querySelectorAll("[data-indx-select='" + idx1 + "'] .cont_select_int > li");
     var hg = 0;
     var slect_open = document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].getAttribute('data-selec-open');
     var slect_element_open = document.querySelectorAll("[data-indx-select='" + idx1 + "'] select")[0];
     if (isMobileDevice()) {
         if (window.document.createEvent) { // All
             var evt = window.document.createEvent("MouseEvents");
             evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
             slect_element_open.dispatchEvent(evt);
         } else if (slect_element_open.fireEvent) { // IE
             slect_element_open.fireEvent("onmousedown");
         } else {
             slect_element_open.click();
         }
     } else {


         for (var i = 0; i < ul_cont_li.length; i++) {
             hg += ul_cont_li[i].offsetHeight;
         };
         if (slect_open == 'false') {
             document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'true');
             document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = hg + "px";
             document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(180deg)';
         } else {
             document.querySelectorAll("[data-indx-select='" + idx1 + "']")[0].setAttribute('data-selec-open', 'false');
             document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .icon_select_mate")[0].style.transform = 'rotate(0deg)';
             document.querySelectorAll("[data-indx-select='" + idx1 + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
         }
     }

 } // fin function open_select

 function salir_select(indx) {
     var select_ = document.querySelectorAll("[data-indx-select='" + indx + "'] > select")[0];
     document.querySelectorAll("[data-indx-select='" + indx + "'] > .cont_list_select_mate > ul")[0].style.height = "0px";
     document.querySelector("[data-indx-select='" + indx + "'] > .icon_select_mate").style.transform = 'rotate(0deg)';
     document.querySelectorAll("[data-indx-select='" + indx + "']")[0].setAttribute('data-selec-open', 'false');
 }


 function _select_option(indx, selc) {
     if (isMobileDevice()) {
         selc = selc - 1;
     }
     var select_ = document.querySelectorAll("[data-indx-select='" + selc + "'] > select")[0];

     var li_s = document.querySelectorAll("[data-indx-select='" + selc + "'] .cont_select_int > li");
     var p_act = document.querySelectorAll("[data-indx-select='" + selc + "'] > .selecionado_opcion")[0].innerHTML = li_s[indx].innerHTML;
     var select_optiones = document.querySelectorAll("[data-indx-select='" + selc + "'] > select > option");
     for (var i = 0; i < li_s.length; i++) {
         if (li_s[i].className == 'active') {
             li_s[i].className = '';
         };
         li_s[indx].className = 'active';

     };
     select_optiones[indx].selected = true;
     select_.selectedIndex = indx;
     select_.onchange();
     salir_select(selc);
 }


 function showhidediv() {



     var checkBox1 = document.getElementById("field_2hn10m-1");
     var checkBox2 = document.getElementById("field_2hn10m-2");
     var checkBox3 = document.getElementById("field_2hn10m-3");
     var checkBox4 = document.getElementById("field_2hn10m-4");
     var checkBox5 = document.getElementById("field_2hn10m-5");
     var checkBox6 = document.getElementById("field_2hn10m-6");
     var checkBox7 = document.getElementById("field_2hn10m-7");
     var checkBox8 = document.getElementById("field_2hn10m-8");

     if (checkBox1.checked == true) {
         document.getElementById("step2").style.display = "block";
         document.getElementById("yesnodiv").style.display = "block";
         document.getElementById("yesnodivano").style.display = "block";
         document.getElementById("total_div_visibility").style.display = "block";
         document.getElementById("result_button").style.display = "block";
     } else if (checkBox2.checked == true) {
         document.getElementById("step2").style.display = "block";
         document.getElementById("yesnodiv").style.display = "block";
         document.getElementById("yesnodivano").style.display = "block";
         document.getElementById("total_div_visibility").style.display = "block";
         document.getElementById("result_button").style.display = "block";
     } else if (checkBox3.checked == true) {
         document.getElementById("step2").style.display = "block";
         document.getElementById("yesnodiv").style.display = "block";
         document.getElementById("yesnodivano").style.display = "block";
         document.getElementById("total_div_visibility").style.display = "block";
         document.getElementById("result_button").style.display = "block";
     } else if (checkBox4.checked == true) {
         document.getElementById("step2").style.display = "block";
         document.getElementById("yesnodiv").style.display = "block";
         document.getElementById("yesnodivano").style.display = "block";
         document.getElementById("total_div_visibility").style.display = "block";
         document.getElementById("result_button").style.display = "block";
     } else if (checkBox5.checked == true) {
         document.getElementById("step2").style.display = "block";
         document.getElementById("yesnodiv").style.display = "block";
         document.getElementById("yesnodivano").style.display = "block";
         document.getElementById("total_div_visibility").style.display = "block";
         document.getElementById("result_button").style.display = "block";
     } else if (checkBox6.checked == true) {
         document.getElementById("step2").style.display = "block";
         document.getElementById("yesnodiv").style.display = "block";
         document.getElementById("yesnodivano").style.display = "block";
         document.getElementById("total_div_visibility").style.display = "block";
         document.getElementById("result_button").style.display = "block";
     } else if (checkBox7.checked == true) {
         document.getElementById("step2").style.display = "block";
         document.getElementById("yesnodiv").style.display = "block";
         document.getElementById("yesnodivano").style.display = "block";
         document.getElementById("total_div_visibility").style.display = "block";
         document.getElementById("result_button").style.display = "block";
     } else if (checkBox8.checked == true) {
         document.getElementById("step2").style.display = "block";
         document.getElementById("yesnodiv").style.display = "block";
         document.getElementById("yesnodivano").style.display = "block";
         document.getElementById("total_div_visibility").style.display = "block";
         document.getElementById("result_button").style.display = "block";

     } else {
         document.getElementById("step2").style.display = "none";
         //document.getElementById("yesnodiv").style.display="none";
         //document.getElementById("yesnodivano").style.display="none";
         document.getElementById("yesno").value = 0;
         document.getElementById("yesnoano").value = 0;
         document.getElementById("total_div_visibility").style.display = "none";
         document.getElementById("result_button").style.display = "none";




     }


     if (checkBox1.checked == true) {
         document.getElementById("term_life_div").style.display = "block";
     } else {
         document.getElementById("term_life_div").style.display = "none";
     }


     if (checkBox2.checked == true) {
         document.getElementById("critical_illness_div").style.display = "block";
     } else {
         document.getElementById("critical_illness_div").style.display = "none";
     }


     if (checkBox3.checked == true) {
         document.getElementById("personal_accident_div").style.display = "block";
     } else {
         document.getElementById("personal_accident_div").style.display = "none";
     }


     if (checkBox4.checked == true) {
         document.getElementById("out_patient_div").style.display = "block";
     } else {
         document.getElementById("out_patient_div").style.display = "none";
     }


     if (checkBox5.checked == true) {
         document.getElementById("hospital_surgical_div").style.display = "block";
     } else {
         document.getElementById("hospital_surgical_div").style.display = "none";
     }


     if (checkBox6.checked == true) {
         document.getElementById("dental_div").style.display = "block";
     } else {
         document.getElementById("dental_div").style.display = "none";
     }


     if (checkBox7.checked == true) {
         document.getElementById("specialist_div").style.display = "block";
     } else {
         document.getElementById("specialist_div").style.display = "none";
     }


     if (checkBox8.checked == true) {
         document.getElementById("disability_income_div").style.display = "block";
     } else {
         document.getElementById("disability_income_div").style.display = "none";
     }

     var yesnoanswer = document.getElementById("yesno").value;

     if (yesnoanswer == 1) {
         document.getElementById("renewal_div").style.display = "block";
     } else {
         document.getElementById("renewal_div").style.display = "none";
     }

     var yesnoanswer_ano = document.getElementById("yesnoano").value;
     if (yesnoanswer_ano == 1) {
         document.getElementById("renewal_ano_div").style.display = "block";
     } else {
         document.getElementById("renewal_ano_div").style.display = "none";
     }

     var mail_sending = document.getElementById("yesnoano_email").value;

     if (mail_sending == 1) {
         document.getElementById("yesnodivano_email").style.display = "block";
     } else {
         document.getElementById("yesnodivano_email").style.display = "none";
     }

 }



 function calculation() {

     var checkBox55 = document.getElementById("field_2hn10m-5");
     var checkBox44 = document.getElementById("field_2hn10m-4");
     var checkBox77 = document.getElementById("field_2hn10m-7");
     var checkBox66 = document.getElementById("field_2hn10m-6");

     if (checkBox44.checked == true) {

         var outpatiend_ren = parseInt(document.getElementById("outpatient_renewal_2").value);
         if (outpatiend_ren <= 0) {
             alert("Enter Number of Employees in the Renewal Year for Outpatient");
             return false;
         }
     }

     if ((checkBox44.checked == true) && (checkBox55.checked == false)) {

         alert("Hospital & Surgical Premiums for any plan are required");
         return false;

     }

     if (checkBox77.checked == true) {

         var specialist_ren = parseInt(document.getElementById("specialist_renewal_2").value);
         if (specialist_ren <= 0) {
             alert("Enter Number of Employees in the Renewal Year for Specialist");
             return false;
         }
     }

     if (checkBox66.checked == true) {

         var dental_ren = parseInt(document.getElementById("dental_renewal_2").value);
         if (dental_ren <= 0) {
             alert("Enter Number of Employees in the Renewal Year for Dental");
             return false;
         }
     }


     if (checkBox55.checked == true) {


         var hospitan_ren_A = parseInt(document.getElementById("hospital_surgical_renewal_A_2").value);
         var hospitan_ren_B = parseInt(document.getElementById("hospital_surgical_renewal_B_2").value);
         var hospitan_ren_C = parseInt(document.getElementById("hospital_surgical_renewal_C_2").value);
         var hospitan_ren_D = parseInt(document.getElementById("hospital_surgical_renewal_D_2").value);
         var hospitan_ren_E = parseInt(document.getElementById("hospital_surgical_renewal_E_2").value);

         var prem_plan_A = parseFloat(document.getElementById("hospital_surgical_1").value);
         var prem_plan_B = parseFloat(document.getElementById("hospital_surgical_16").value);
         var prem_plan_C = parseFloat(document.getElementById("hospital_surgical_31").value);
         var prem_plan_D = parseFloat(document.getElementById("hospital_surgical_46").value);
         var prem_plan_E = parseFloat(document.getElementById("hospital_surgical_61").value);

         if ((prem_plan_A == 0) && (prem_plan_B == 0) && (prem_plan_C == 0) && (prem_plan_D == 0) && (prem_plan_E == 0)) {
             alert("Please Enter value for Hospital & Surgical any plan");
             return false;

         }

         if (prem_plan_A > 0) {

             if (hospitan_ren_A <= 0) {
                 alert("Enter Number of Employees in the Renewal Year for Hospital & Surgical Plan A");
                 return false;
             }

         }

         if (prem_plan_B > 0) {

             if (hospitan_ren_B <= 0) {
                 alert("Enter Number of Employees in the Renewal Year for Hospital & Surgical Plan B");
                 return false;
             }

         }


         if (prem_plan_C > 0) {

             if (hospitan_ren_C <= 0) {
                 alert("Enter Number of Employees in the Renewal Year for Hospital & Surgical Plan C");
                 return false;
             }

         }


         if (prem_plan_D > 0) {

             if (hospitan_ren_D <= 0) {
                 alert("Enter Number of Employees in the Renewal Year for Hospital & Surgical Plan D");
                 return false;
             }

         }


         if (prem_plan_E > 0) {

             if (hospitan_ren_E <= 0) {
                 alert("Enter Number of Employees in the Renewal Year for Hospital & Surgical Plan E");
                 return false;
             }

         }



     }






     document.getElementById("result_div").style.display = "block";
     var commission_group_term_life = (10 / 100);
     var commission_group_critical_illness = (10 / 100);
     var commission_group_personal_accident = (10 / 100);
     var commission_group_disability_income = (10 / 100);
     var commission_group_outpatient = (10 / 100);
     var commission_group_hospital_surgical = (15 / 100);
     var commission_group_dental = (10 / 100);
     var commission_group_specialist = (10 / 100);


     var expenses_group_term_life = (5 / 100);
     var expenses_group_critical_illness = (5 / 100);
     var expenses_group_personal_accident = (5 / 100);
     var expenses_group_disability_income = (5 / 100);
     var expenses_group_outpatient = (5 / 100);
     var expenses_group_hospital_surgical = (5 / 100);
     var expenses_group_dental = (5 / 100);
     var expenses_group_specialist = (5 / 100);


     var contingency_group_term_life = (10 / 100);
     var contingency_group_critical_illness = (10 / 100);
     var contingency_group_personal_accident = (10 / 100);
     var contingency_group_disability_income = (10 / 100);
     var contingency_group_outpatient = (10 / 100);
     var contingency_group_hospital_surgical = (10 / 100);
     var contingency_group_dental = (10 / 100);
     var contingency_group_specialist = (10 / 100);


     var profit_group_term_life = (5 / 100);
     var profit_group_critical_illness = (5 / 100);
     var profit_group_personal_accident = (5 / 100);
     var profit_group_disability_income = (5 / 100);
     var profit_group_outpatient = (5 / 100);
     var profit_group_hospital_surgical = (5 / 100);
     var profit_group_dental = (5 / 100);
     var profit_group_specialist = (5 / 100);



     var maxlossincurable_group_term_life = (100 / 100);
     var maxlossincurable_group_critical_illness = (100 / 100);
     var maxlossincurable_group_personal_accident = (100 / 100);
     var maxlossincurable_group_disability_income = (100 / 100);
     var maxlossincurable_group_outpatient = (100 / 100);
     var maxlossincurable_group_hospital_surgical = (100 / 100);
     var maxlossincurable_group_dental = (100 / 100);
     var maxlossincurable_group_specialist = (100 / 100);

     var allowable_loss_group_term_life = maxlossincurable_group_term_life - (commission_group_term_life + expenses_group_term_life + contingency_group_term_life + profit_group_term_life);
     var allowable_loss_group_critical_illness = maxlossincurable_group_critical_illness - (commission_group_critical_illness + expenses_group_critical_illness + contingency_group_critical_illness + profit_group_critical_illness);
     var allowable_loss_group_personal_accident = maxlossincurable_group_personal_accident - (commission_group_personal_accident + expenses_group_personal_accident + contingency_group_personal_accident + profit_group_personal_accident);
     var allowable_loss_group_disability_income = maxlossincurable_group_disability_income - (commission_group_disability_income + expenses_group_disability_income + contingency_group_disability_income + profit_group_disability_income);
     var allowable_loss_group_outpatient = maxlossincurable_group_outpatient - (commission_group_outpatient + expenses_group_outpatient + contingency_group_outpatient + profit_group_outpatient);
     //var allowable_loss_group_hospital_surgical = maxlossincurable_group_hospital_surgical - (commission_group_hospital_surgical + expenses_group_hospital_surgical + contingency_group_hospital_surgical + profit_group_hospital_surgical);
     var allowable_loss_group_hospital_surgical = 70 / 100;
     var allowable_loss_group_dental = maxlossincurable_group_dental - (commission_group_dental + expenses_group_dental + contingency_group_dental + profit_group_dental);
     var allowable_loss_group_specialist = maxlossincurable_group_specialist - (commission_group_specialist + expenses_group_specialist + contingency_group_specialist + profit_group_specialist);


     var medical_inflation_group_term_life = (3 / 100);
     var medical_inflation_group_critical_illness = (3 / 100);
     var medical_inflation_group_personal_accident = (3 / 100);
     var medical_inflation_group_disability_income = (0 / 100);
     var medical_inflation_group_outpatient = (0 / 100);
     var medical_inflation_group_hospital_surgical = (0 / 100);
     var medical_inflation_group_dental = (0 / 100);
     var medical_inflation_group_specialist = (0 / 100);



     var term_life_1 = parseFloat(document.getElementById("term_life_1").value); //current
     var term_life_2 = parseFloat(document.getElementById("term_life_2").value); //year2
     var term_life_3 = parseFloat(document.getElementById("term_life_3").value); //year3
     var term_life_4 = parseFloat(document.getElementById("term_life_4").value); //current
     var term_life_5 = parseFloat(document.getElementById("term_life_5").value); //year2
     var term_life_6 = parseFloat(document.getElementById("term_life_6").value); //year3
     var term_life_7 = parseFloat(document.getElementById("term_life_7").value); //current
     var term_life_8 = parseFloat(document.getElementById("term_life_8").value); //year2
     var term_life_9 = parseFloat(document.getElementById("term_life_9").value); //year3


     var critical_illness_1 = parseFloat(document.getElementById("critical_illness_1").value); //current
     var critical_illness_2 = parseFloat(document.getElementById("critical_illness_2").value); //year2
     var critical_illness_3 = parseFloat(document.getElementById("critical_illness_3").value); //year3
     var critical_illness_4 = parseFloat(document.getElementById("critical_illness_4").value); //current
     var critical_illness_5 = parseFloat(document.getElementById("critical_illness_5").value); //year2
     var critical_illness_6 = parseFloat(document.getElementById("critical_illness_6").value); //year3
     var critical_illness_7 = parseFloat(document.getElementById("critical_illness_7").value); //current
     var critical_illness_8 = parseFloat(document.getElementById("critical_illness_8").value); //year2
     var critical_illness_9 = parseFloat(document.getElementById("critical_illness_9").value); //year3



     var personal_accident_1 = parseFloat(document.getElementById("personal_accident_1").value); //current
     var personal_accident_2 = parseFloat(document.getElementById("personal_accident_2").value); //year2
     var personal_accident_3 = parseFloat(document.getElementById("personal_accident_3").value); //year3
     var personal_accident_4 = parseFloat(document.getElementById("personal_accident_4").value); //current
     var personal_accident_5 = parseFloat(document.getElementById("personal_accident_5").value); //year2
     var personal_accident_6 = parseFloat(document.getElementById("personal_accident_6").value); //year3
     var personal_accident_7 = parseFloat(document.getElementById("personal_accident_7").value); //current
     var personal_accident_8 = parseFloat(document.getElementById("personal_accident_8").value); //year2
     var personal_accident_9 = parseFloat(document.getElementById("personal_accident_9").value); //year3


     var disability_income_1 = parseFloat(document.getElementById("disability_income_1").value); //current
     var disability_income_2 = parseFloat(document.getElementById("disability_income_2").value); //year2
     var disability_income_3 = parseFloat(document.getElementById("disability_income_3").value); //year3
     var disability_income_4 = parseFloat(document.getElementById("disability_income_4").value); //current
     var disability_income_5 = parseFloat(document.getElementById("disability_income_5").value); //year2
     var disability_income_6 = parseFloat(document.getElementById("disability_income_6").value); //year3
     var disability_income_7 = parseFloat(document.getElementById("disability_income_7").value); //current
     var disability_income_8 = parseFloat(document.getElementById("disability_income_8").value); //year2
     var disability_income_9 = parseFloat(document.getElementById("disability_income_9").value); //year3


     var hospital_surgical_1_A = parseFloat(document.getElementById("hospital_surgical_1").value); //current
     var hospital_surgical_2_A = parseFloat(document.getElementById("hospital_surgical_2").value); //year2
     var hospital_surgical_3_A = parseFloat(document.getElementById("hospital_surgical_3").value); //year3
     var hospital_surgical_4_A = parseFloat(document.getElementById("hospital_surgical_4").value); //current
     var hospital_surgical_5_A = parseFloat(document.getElementById("hospital_surgical_5").value); //year2
     var hospital_surgical_6_A = parseFloat(document.getElementById("hospital_surgical_6").value); //year3
     var hospital_surgical_7_A = parseFloat(document.getElementById("hospital_surgical_7").value); //current
     var hospital_surgical_8_A = parseFloat(document.getElementById("hospital_surgical_8").value); //year2
     var hospital_surgical_9_A = parseFloat(document.getElementById("hospital_surgical_9").value); //year3
     var hospital_surgical_10_A = parseFloat(document.getElementById("hospital_surgical_10").value); //current
     var hospital_surgical_11_A = parseFloat(document.getElementById("hospital_surgical_11").value); //year2
     var hospital_surgical_12_A = parseFloat(document.getElementById("hospital_surgical_12").value); //year3
     var hospital_surgical_13_A = parseFloat(document.getElementById("hospital_surgical_13").value); //current
     var hospital_surgical_14_A = parseFloat(document.getElementById("hospital_surgical_14").value); //year2
     var hospital_surgical_15_A = parseFloat(document.getElementById("hospital_surgical_15").value); //year3


     var hospital_surgical_1_B = parseFloat(document.getElementById("hospital_surgical_16").value); //current
     var hospital_surgical_2_B = parseFloat(document.getElementById("hospital_surgical_17").value); //year2
     var hospital_surgical_3_B = parseFloat(document.getElementById("hospital_surgical_18").value); //year3
     var hospital_surgical_4_B = parseFloat(document.getElementById("hospital_surgical_19").value); //current
     var hospital_surgical_5_B = parseFloat(document.getElementById("hospital_surgical_20").value); //year2
     var hospital_surgical_6_B = parseFloat(document.getElementById("hospital_surgical_21").value); //year3
     var hospital_surgical_7_B = parseFloat(document.getElementById("hospital_surgical_22").value); //current
     var hospital_surgical_8_B = parseFloat(document.getElementById("hospital_surgical_23").value); //year2
     var hospital_surgical_9_B = parseFloat(document.getElementById("hospital_surgical_24").value); //year3
     var hospital_surgical_10_B = parseFloat(document.getElementById("hospital_surgical_25").value); //current
     var hospital_surgical_11_B = parseFloat(document.getElementById("hospital_surgical_26").value); //year2
     var hospital_surgical_12_B = parseFloat(document.getElementById("hospital_surgical_27").value); //year3
     var hospital_surgical_13_B = parseFloat(document.getElementById("hospital_surgical_28").value); //current
     var hospital_surgical_14_B = parseFloat(document.getElementById("hospital_surgical_29").value); //year2
     var hospital_surgical_15_B = parseFloat(document.getElementById("hospital_surgical_30").value); //year3


     var hospital_surgical_1_C = parseFloat(document.getElementById("hospital_surgical_31").value); //current
     var hospital_surgical_2_C = parseFloat(document.getElementById("hospital_surgical_32").value); //year2
     var hospital_surgical_3_C = parseFloat(document.getElementById("hospital_surgical_33").value); //year3
     var hospital_surgical_4_C = parseFloat(document.getElementById("hospital_surgical_34").value); //current
     var hospital_surgical_5_C = parseFloat(document.getElementById("hospital_surgical_35").value); //year2
     var hospital_surgical_6_C = parseFloat(document.getElementById("hospital_surgical_36").value); //year3
     var hospital_surgical_7_C = parseFloat(document.getElementById("hospital_surgical_37").value); //current
     var hospital_surgical_8_C = parseFloat(document.getElementById("hospital_surgical_38").value); //year2
     var hospital_surgical_9_C = parseFloat(document.getElementById("hospital_surgical_39").value); //year3
     var hospital_surgical_10_C = parseFloat(document.getElementById("hospital_surgical_40").value); //current
     var hospital_surgical_11_C = parseFloat(document.getElementById("hospital_surgical_41").value); //year2
     var hospital_surgical_12_C = parseFloat(document.getElementById("hospital_surgical_42").value); //year3
     var hospital_surgical_13_C = parseFloat(document.getElementById("hospital_surgical_43").value); //current
     var hospital_surgical_14_C = parseFloat(document.getElementById("hospital_surgical_44").value); //year2
     var hospital_surgical_15_C = parseFloat(document.getElementById("hospital_surgical_45").value); //year3


     var hospital_surgical_1_D = parseFloat(document.getElementById("hospital_surgical_46").value); //current
     var hospital_surgical_2_D = parseFloat(document.getElementById("hospital_surgical_47").value); //year2
     var hospital_surgical_3_D = parseFloat(document.getElementById("hospital_surgical_48").value); //year3
     var hospital_surgical_4_D = parseFloat(document.getElementById("hospital_surgical_49").value); //current
     var hospital_surgical_5_D = parseFloat(document.getElementById("hospital_surgical_50").value); //year2
     var hospital_surgical_6_D = parseFloat(document.getElementById("hospital_surgical_51").value); //year3
     var hospital_surgical_7_D = parseFloat(document.getElementById("hospital_surgical_52").value); //current
     var hospital_surgical_8_D = parseFloat(document.getElementById("hospital_surgical_53").value); //year2
     var hospital_surgical_9_D = parseFloat(document.getElementById("hospital_surgical_54").value); //year3
     var hospital_surgical_10_D = parseFloat(document.getElementById("hospital_surgical_55").value); //current
     var hospital_surgical_11_D = parseFloat(document.getElementById("hospital_surgical_56").value); //year2
     var hospital_surgical_12_D = parseFloat(document.getElementById("hospital_surgical_57").value); //year3
     var hospital_surgical_13_D = parseFloat(document.getElementById("hospital_surgical_58").value); //current
     var hospital_surgical_14_D = parseFloat(document.getElementById("hospital_surgical_59").value); //year2
     var hospital_surgical_15_D = parseFloat(document.getElementById("hospital_surgical_60").value); //year3


     var hospital_surgical_1_E = parseFloat(document.getElementById("hospital_surgical_61").value); //current
     var hospital_surgical_2_E = parseFloat(document.getElementById("hospital_surgical_62").value); //year2
     var hospital_surgical_3_E = parseFloat(document.getElementById("hospital_surgical_63").value); //year3
     var hospital_surgical_4_E = parseFloat(document.getElementById("hospital_surgical_64").value); //current
     var hospital_surgical_5_E = parseFloat(document.getElementById("hospital_surgical_65").value); //year2
     var hospital_surgical_6_E = parseFloat(document.getElementById("hospital_surgical_66").value); //year3
     var hospital_surgical_7_E = parseFloat(document.getElementById("hospital_surgical_67").value); //current
     var hospital_surgical_8_E = parseFloat(document.getElementById("hospital_surgical_68").value); //year2
     var hospital_surgical_9_E = parseFloat(document.getElementById("hospital_surgical_69").value); //year3
     var hospital_surgical_10_E = parseFloat(document.getElementById("hospital_surgical_70").value); //current
     var hospital_surgical_11_E = parseFloat(document.getElementById("hospital_surgical_71").value); //year2
     var hospital_surgical_12_E = parseFloat(document.getElementById("hospital_surgical_72").value); //year3
     var hospital_surgical_13_E = parseFloat(document.getElementById("hospital_surgical_73").value); //current
     var hospital_surgical_14_E = parseFloat(document.getElementById("hospital_surgical_74").value); //year2
     var hospital_surgical_15_E = parseFloat(document.getElementById("hospital_surgical_75").value); //year3


     var out_patient_1 = parseFloat(document.getElementById("out_patient_1").value); //current
     var out_patient_2 = parseFloat(document.getElementById("out_patient_2").value); //year2
     var out_patient_3 = parseFloat(document.getElementById("out_patient_3").value); //year3
     var out_patient_4 = parseFloat(document.getElementById("out_patient_4").value); //current
     var out_patient_5 = parseFloat(document.getElementById("out_patient_5").value); //year2
     var out_patient_6 = parseFloat(document.getElementById("out_patient_6").value); //year3
     var out_patient_7 = parseFloat(document.getElementById("out_patient_7").value); //current
     var out_patient_8 = parseFloat(document.getElementById("out_patient_8").value); //year2
     var out_patient_9 = parseFloat(document.getElementById("out_patient_9").value); //year3


     var specialist_1 = parseFloat(document.getElementById("specialist_1").value); //current
     var specialist_2 = parseFloat(document.getElementById("specialist_2").value); //year2
     var specialist_3 = parseFloat(document.getElementById("specialist_3").value); //year3
     var specialist_4 = parseFloat(document.getElementById("specialist_4").value); //current
     var specialist_5 = parseFloat(document.getElementById("specialist_5").value); //year2
     var specialist_6 = parseFloat(document.getElementById("specialist_6").value); //year3
     var specialist_7 = parseFloat(document.getElementById("specialist_7").value); //current
     var specialist_8 = parseFloat(document.getElementById("specialist_8").value); //year2
     var specialist_9 = parseFloat(document.getElementById("specialist_9").value); //year3


     var dental_1 = parseFloat(document.getElementById("dental_1").value); //current
     var dental_2 = parseFloat(document.getElementById("dental_2").value); //year2
     var dental_3 = parseFloat(document.getElementById("dental_3").value); //year3
     var dental_4 = parseFloat(document.getElementById("dental_4").value); //current
     var dental_5 = parseFloat(document.getElementById("dental_5").value); //year2
     var dental_6 = parseFloat(document.getElementById("dental_6").value); //year3
     var dental_7 = parseFloat(document.getElementById("dental_7").value); //current
     var dental_8 = parseFloat(document.getElementById("dental_8").value); //year2
     var dental_9 = parseFloat(document.getElementById("dental_9").value); //year3


     var potential_claims_1_A = parseFloat(document.getElementById("potential_claims_1").value);
     var potential_claims_1_B = parseFloat(document.getElementById("potential_claims_2").value);
     var potential_claims_1_C = parseFloat(document.getElementById("potential_claims_3").value);
     var potential_claims_1_D = parseFloat(document.getElementById("potential_claims_4").value);
     var potential_claims_1_E = parseFloat(document.getElementById("potential_claims_5").value);
     var potential_claims_1_disable = parseFloat(document.getElementById("potential_claims_6").value);


     var term_life_renewal_1 = parseFloat(document.getElementById("term_life_renewal_1").value);
     var critical_illness_renewal_1 = parseFloat(document.getElementById("critical_illness_renewal_1").value);
     var personal_accident_renewal_1 = parseFloat(document.getElementById("personal_accident_renewal_1").value);
     var disability_income_renewal_1 = parseFloat(document.getElementById("disability_income_renewal_1").value);
     var hospital_surgical_renewal_A_1 = parseFloat(document.getElementById("hospital_surgical_renewal_A_1").value);
     var hospital_surgical_renewal_A_2 = parseFloat(document.getElementById("hospital_surgical_renewal_A_2").value);
     var hospital_surgical_renewal_B_1 = parseFloat(document.getElementById("hospital_surgical_renewal_B_1").value);
     var hospital_surgical_renewal_B_2 = parseFloat(document.getElementById("hospital_surgical_renewal_B_2").value);
     var hospital_surgical_renewal_C_1 = parseFloat(document.getElementById("hospital_surgical_renewal_C_1").value);
     var hospital_surgical_renewal_C_2 = parseFloat(document.getElementById("hospital_surgical_renewal_C_2").value);
     var hospital_surgical_renewal_D_1 = parseFloat(document.getElementById("hospital_surgical_renewal_D_1").value);
     var hospital_surgical_renewal_D_2 = parseFloat(document.getElementById("hospital_surgical_renewal_D_2").value);
     var hospital_surgical_renewal_E_1 = parseFloat(document.getElementById("hospital_surgical_renewal_E_1").value);
     var hospital_surgical_renewal_E_2 = parseFloat(document.getElementById("hospital_surgical_renewal_E_2").value);

     var outpatient_renewal_1 = parseFloat(document.getElementById("outpatient_renewal_1").value);
     var outpatient_renewal_2 = parseFloat(document.getElementById("outpatient_renewal_2").value);

     var specialist_renewal_1 = parseFloat(document.getElementById("specialist_renewal_1").value);
     var specialist_renewal_2 = parseFloat(document.getElementById("specialist_renewal_2").value);

     var dental_renewal_1 = parseFloat(document.getElementById("dental_renewal_1").value);
     var dental_renewal_2 = parseFloat(document.getElementById("dental_renewal_2").value);

     var ratechange_term_life = ((term_life_renewal_1 - term_life_1) / term_life_1) / (1 + medical_inflation_group_term_life);
     var ratechange_critical_illness = ((critical_illness_renewal_1 - critical_illness_1) / critical_illness_1) / (1 + medical_inflation_group_critical_illness);
     var ratechange_personal_accident = ((personal_accident_renewal_1 - personal_accident_1) / personal_accident_1) / (1 + medical_inflation_group_personal_accident);
     var ratechange_disability_income = ((disability_income_renewal_1 - out_patient_1) / out_patient_1) / (1 + medical_inflation_group_disability_income);
     var ratechange_outpatient = ((outpatient_renewal_1 - out_patient_1) / out_patient_1) / (1 + medical_inflation_group_outpatient);

     var avg_3yrs_premium_term_life = (term_life_1 + term_life_2 + term_life_3) / 3;
     var avg_3yrs_premium_critical_illness = (critical_illness_1 + critical_illness_2 + critical_illness_3) / 3;
     var avg_3yrs_premium_personal_accident = (personal_accident_1 + personal_accident_2 + personal_accident_3) / 3;
     var avg_3yrs_premium_disability_income = (disability_income_1 + disability_income_2 + disability_income_3) / 3;
     var avg_3yrs_premium_out_patient = (out_patient_1 + out_patient_2 + out_patient_3) / 3;
     var avg_3yrs_premium_specialist = (specialist_1 + specialist_2 + specialist_3) / 3;
     var avg_3yrs_premium_dental = (dental_1 + dental_2 + dental_3) / 3;



     var avg_3yrs_losses_term_life = (term_life_7 + term_life_8 + term_life_9) / 3;
     var avg_3yrs_losses_critical_illness = (critical_illness_7 + critical_illness_8 + critical_illness_9) / 3;
     var avg_3yrs_losses_personal_accident = (personal_accident_7 + personal_accident_8 + personal_accident_9) / 3;
     var avg_3yrs_losses_disability_income = (disability_income_7 + disability_income_8 + disability_income_9) / 3;
     var avg_3yrs_losses_out_patient = (out_patient_7 + out_patient_8 + out_patient_9) / 3;
     var avg_3yrs_losses_specialist = (specialist_7 + specialist_8 + specialist_9) / 3;
     var avg_3yrs_losses_dental = (dental_7 + dental_8 + dental_9) / 3;


     var avg_3yrs_no_of_emp_out_patient = (out_patient_4 + out_patient_5 + out_patient_6) / 3;
     var avg_3yrs_no_of_emp_dental = (dental_4 + dental_5 + dental_6) / 3;
     var avg_3yrs_no_of_emp_specialist = (specialist_4 + specialist_5 + specialist_6) / 3;

     var rate_adjustment_for_market_factors = 0 / 100;
     var facors_for_perpetual_claims = 3;

     var factor_for_loss_ratio_recovery_disability_income = 0.5;
     var factor_for_loss_ratio_recovery_hospital_surgical = 0.5;

     var max_increase = 30 / 100;
     var min_reduction = -20 / 100;

     var max_increase_row_critical_illness = Math.min((avg_3yrs_losses_critical_illness / ((critical_illness_1 / 1000) * critical_illness_4)) - allowable_loss_group_critical_illness, max_increase);
     var max_increase_row_personal_accident = Math.min((avg_3yrs_losses_personal_accident / ((personal_accident_1 / 1000) * personal_accident_4)) - allowable_loss_group_personal_accident, max_increase);
     var max_increase_row_disability_income = Math.min((avg_3yrs_losses_disability_income / ((disability_income_1 / 1000) * disability_income_4)) - allowable_loss_group_disability_income, max_increase);
     var max_increase_row_out_patient = Math.min((avg_3yrs_losses_out_patient / ((out_patient_1 / 1000) * out_patient_4)) - allowable_loss_group_outpatient, max_increase);
     var max_increase_row_dental = Math.min((avg_3yrs_losses_dental / ((dental_1 / 1000) * dental_4)) - allowable_loss_group_dental, max_increase);
     var max_increase_row_specialist = Math.min((avg_3yrs_losses_specialist / ((specialist_1 / 1000) * specialist_4)) - allowable_loss_group_specialist, max_increase);


     var min_reduction_row_critical_illness = Math.max((avg_3yrs_losses_critical_illness / ((critical_illness_1 / 1000) * critical_illness_4)) - allowable_loss_group_critical_illness, min_reduction);
     var min_reduction_row_personal_accident = Math.max((avg_3yrs_losses_personal_accident / ((personal_accident_1 / 1000) * personal_accident_4)) - allowable_loss_group_personal_accident, min_reduction);
     var min_reduction_row_disability_income = Math.max((avg_3yrs_losses_disability_income / ((disability_income_1 / 1000) * disability_income_4)) - allowable_loss_group_disability_income, min_reduction);
     var min_reduction_row_out_patient = Math.max((avg_3yrs_losses_out_patient / ((out_patient_1 / 1000) * out_patient_4)) - allowable_loss_group_outpatient, min_reduction);
     var min_reduction_row_dental = Math.max((avg_3yrs_losses_dental / ((dental_1 / 1000) * dental_4)) - allowable_loss_group_dental, min_reduction);
     var min_reduction_row_specialist = Math.max((avg_3yrs_losses_specialist / ((specialist_1 / 1000) * specialist_4)) - allowable_loss_group_specialist, min_reduction);

     // bujhtey habey
     var select_critical_illness;
     var select_personal_accident;
     var select_disability_income;
     var select_out_patient;
     var select_dental;
     var select_specialist;
     // bujhtey habey


     if (min_reduction_row_critical_illness <= min_reduction) {

         select_critical_illness = min_reduction;
     } else if (max_increase_row_critical_illness >= max_increase) {
         select_critical_illness = max_increase;

     } else {
         select_critical_illness = avg_3yrs_losses_critical_illness / (critical_illness_1 / 1000 * critical_illness_4) - allowable_loss_group_critical_illness;

     }



     if (min_reduction_row_personal_accident <= min_reduction) {

         select_personal_accident = min_reduction;
     } else if (max_increase_row_personal_accident >= max_increase) {
         select_personal_accident = max_increase;

     } else {
         select_personal_accident = avg_3yrs_losses_personal_accident / (personal_accident_1 / 1000 * personal_accident_4) - allowable_loss_group_personal_accident;

     }




     if (min_reduction_row_disability_income <= min_reduction) {

         select_disability_income = min_reduction;
     } else if (max_increase_row_disability_income >= max_increase) {
         select_disability_income = max_increase;

     } else {
         select_disability_income = avg_3yrs_losses_disability_income / (disability_income_1 / 1000 * disability_income_4) - allowable_loss_group_disability_income;

     }



     if (min_reduction_row_out_patient <= min_reduction) {

         select_out_patient = min_reduction;
     } else if (max_increase_row_out_patient >= max_increase) {
         select_out_patient = max_increase;

     } else {
         select_out_patient = avg_3yrs_losses_out_patient / (out_patient_1 / 1000 * out_patient_4) - allowable_loss_group_outpatient;

     }




     if (min_reduction_row_dental <= min_reduction) {

         select_dental = min_reduction;
     } else if (max_increase_row_dental >= max_increase) {
         select_dental = max_increase;

     } else {
         select_dental = avg_3yrs_losses_dental / (dental_1 / 1000 * dental_4) - allowable_loss_group_dental;

     }


     if (min_reduction_row_specialist <= min_reduction) {

         select_specialist = min_reduction;
     } else if (max_increase_row_specialist >= max_increase) {
         select_specialist = max_increase;

     } else {
         select_specialist = avg_3yrs_losses_specialist / (specialist_1 / 1000 * specialist_4) - allowable_loss_group_specialist;

     }
     var technical_rate_term_life = avg_3yrs_premium_term_life * (1 + medical_inflation_group_term_life);
     var technical_rate_critical_illness = avg_3yrs_premium_critical_illness * (1 + medical_inflation_group_critical_illness) * (1 + select_critical_illness);
     var technical_rate_personal_accident = avg_3yrs_premium_personal_accident * (1 + medical_inflation_group_personal_accident) * (1 + select_personal_accident);
     var technical_rate_disability_income = avg_3yrs_premium_disability_income * (1 + medical_inflation_group_disability_income) * (1 + select_disability_income);
     var technical_rate_out_patient = avg_3yrs_premium_out_patient * (1 + medical_inflation_group_outpatient) * (1 + select_out_patient);
     var technical_rate_dental = avg_3yrs_premium_dental * (1 + medical_inflation_group_dental) * (1 + select_dental);
     var technical_rate_specialist = avg_3yrs_premium_specialist * (1 + medical_inflation_group_specialist) * (1 + select_specialist);


     var adjusted_tech_rate_term_life = technical_rate_term_life * (1 + rate_adjustment_for_market_factors);
     var adjusted_tech_rate_critical_illness = technical_rate_critical_illness * (1 + rate_adjustment_for_market_factors);
     var adjusted_tech_rate_personal_accident = technical_rate_personal_accident * (1 + rate_adjustment_for_market_factors);
     var adjusted_tech_rate_disability_income = technical_rate_disability_income * (1 + rate_adjustment_for_market_factors);
     var adjusted_tech_rate_out_patient = technical_rate_out_patient * (1 + rate_adjustment_for_market_factors);
     var adjusted_tech_rate_dental = technical_rate_dental * (1 + rate_adjustment_for_market_factors);
     var adjusted_tech_rate_specialist = technical_rate_specialist * (1 + rate_adjustment_for_market_factors);


     var hospital_respiratory_condition_total = 100000;
     var hospital_respiratory_condition_impact_change = 0 / 100;

     var hospital_hand_foot_mouth_total = 100000;
     var hospital_hand_foot_mouth_impact_change = 0 / 100;

     var hospital_dengue_fever_total = 100000;
     var hospital_dengue_fever_impact_change = 0 / 100;

     var hospital_type2_dybetes_total = 100000;
     var hospital_type2_dybetes_impact_change = 0 / 100;

     var hospital_influenza_total = 100000;
     var hospital_influenza_impact_change = 0 / 100;

     var hospital_colon_cancer_total = 100000;
     var hospital_colon_cancer_impact_change = 0 / 100;

     var hospital_illness7_total = 0;
     var hospital_illness7_impact_change = 0 / 100;

     var hospital_illness8_total = 0;
     var hospital_illness8_impact_change = 0 / 100;

     var hospital_illness9_total = 0;
     var hospital_illness9_impact_change = 0 / 100;

     var hospital_illness10_total = 0;
     var hospital_illness10_impact_change = 0 / 100;

     var thresholds_for_all_products1 = -10 / 100;
     var thresholds_for_all_products2 = -5 / 100;
     var thresholds_for_all_products3 = 5 / 100;
     var thresholds_for_all_products4 = 10 / 100;


     var premium_per_emp_hospital_plan_A = (hospital_surgical_1_A + hospital_surgical_2_A + hospital_surgical_3_A) / 3;
     var premium_per_emp_hospital_plan_B = (hospital_surgical_1_B + hospital_surgical_2_B + hospital_surgical_3_B) / 3;
     var premium_per_emp_hospital_plan_C = (hospital_surgical_1_C + hospital_surgical_2_C + hospital_surgical_3_C) / 3;
     var premium_per_emp_hospital_plan_D = (hospital_surgical_1_D + hospital_surgical_2_D + hospital_surgical_3_D) / 3;
     var premium_per_emp_hospital_plan_E = (hospital_surgical_1_E + hospital_surgical_2_E + hospital_surgical_3_E) / 3;

     var total_emp_hospital_plan_A = (hospital_surgical_4_A + hospital_surgical_5_A + hospital_surgical_6_A) / 3;
     var total_emp_hospital_plan_B = (hospital_surgical_4_B + hospital_surgical_5_B + hospital_surgical_6_B) / 3;
     var total_emp_hospital_plan_C = (hospital_surgical_4_C + hospital_surgical_5_C + hospital_surgical_6_C) / 3;
     var total_emp_hospital_plan_D = (hospital_surgical_4_D + hospital_surgical_5_D + hospital_surgical_6_D) / 3;
     var total_emp_hospital_plan_E = (hospital_surgical_4_E + hospital_surgical_5_E + hospital_surgical_6_E) / 3;

     var policy_limits_hospital_plan_A = hospital_surgical_7_A;
     var policy_limits_hospital_plan_B = hospital_surgical_7_B;
     var policy_limits_hospital_plan_C = hospital_surgical_7_C;
     var policy_limits_hospital_plan_D = hospital_surgical_7_D;
     var policy_limits_hospital_plan_E = hospital_surgical_7_E;

     var total_premiums_hospital = (premium_per_emp_hospital_plan_A * total_emp_hospital_plan_A) + (premium_per_emp_hospital_plan_B * total_emp_hospital_plan_B) + (premium_per_emp_hospital_plan_C * total_emp_hospital_plan_C) + (premium_per_emp_hospital_plan_D * total_emp_hospital_plan_D) + (premium_per_emp_hospital_plan_E * total_emp_hospital_plan_E);

     var total_planwise_premium_plan_A = (premium_per_emp_hospital_plan_A * total_emp_hospital_plan_A);
     var total_planwise_premium_plan_B = (premium_per_emp_hospital_plan_B * total_emp_hospital_plan_B);
     var total_planwise_premium_plan_C = (premium_per_emp_hospital_plan_C * total_emp_hospital_plan_C);
     var total_planwise_premium_plan_D = (premium_per_emp_hospital_plan_D * total_emp_hospital_plan_D);
     var total_planwise_premium_plan_E = (premium_per_emp_hospital_plan_E * total_emp_hospital_plan_E);

     var planwise_losses_plan_A = (hospital_surgical_13_A + hospital_surgical_14_A + hospital_surgical_15_A) / 3;
     var planwise_losses_plan_B = (hospital_surgical_13_B + hospital_surgical_14_B + hospital_surgical_15_B) / 3;
     var planwise_losses_plan_C = (hospital_surgical_13_C + hospital_surgical_14_C + hospital_surgical_15_C) / 3;
     var planwise_losses_plan_D = (hospital_surgical_13_D + hospital_surgical_14_D + hospital_surgical_15_D) / 3;
     var planwise_losses_plan_E = (hospital_surgical_13_E + hospital_surgical_14_E + hospital_surgical_15_E) / 3;

     var percentage_planwise_losses_plan_A = planwise_losses_plan_A / total_planwise_premium_plan_A;
     var percentage_planwise_losses_plan_B = planwise_losses_plan_B / total_planwise_premium_plan_B;
     var percentage_planwise_losses_plan_C = planwise_losses_plan_C / total_planwise_premium_plan_C;
     var percentage_planwise_losses_plan_D = planwise_losses_plan_D / total_planwise_premium_plan_D;
     var percentage_planwise_losses_plan_E = planwise_losses_plan_E / total_planwise_premium_plan_E;

     var inflation_hospital = medical_inflation_group_hospital_surgical;

     var inflated_perms_per_emp_hospital_A = (inflation_hospital + 1) * premium_per_emp_hospital_plan_A;
     var inflated_perms_per_emp_hospital_B = (inflation_hospital + 1) * premium_per_emp_hospital_plan_B;
     var inflated_perms_per_emp_hospital_C = (inflation_hospital + 1) * premium_per_emp_hospital_plan_C;
     var inflated_perms_per_emp_hospital_D = (inflation_hospital + 1) * premium_per_emp_hospital_plan_D;
     var inflated_perms_per_emp_hospital_E = (inflation_hospital + 1) * premium_per_emp_hospital_plan_E;

     var pricing_loss_ratio_hospital = allowable_loss_group_hospital_surgical;

     var sum_plan_wise_avg_losses = planwise_losses_plan_A + planwise_losses_plan_B + planwise_losses_plan_C + planwise_losses_plan_D + planwise_losses_plan_E;
     var sum_planwise_premium = total_planwise_premium_plan_A + total_planwise_premium_plan_B + total_planwise_premium_plan_C + total_planwise_premium_plan_D + total_planwise_premium_plan_E;
     var actual_loss_ratio_hospital = sum_plan_wise_avg_losses / sum_planwise_premium;

     var new_number_emp_hospital_plan_A = hospital_surgical_renewal_A_2;
     var new_number_emp_hospital_plan_B = hospital_surgical_renewal_B_2;
     var new_number_emp_hospital_plan_C = hospital_surgical_renewal_C_2;
     var new_number_emp_hospital_plan_D = hospital_surgical_renewal_D_2;
     var new_number_emp_hospital_plan_E = hospital_surgical_renewal_E_2;

     var healthcare_adjustment_hospital = (hospital_respiratory_condition_total * hospital_respiratory_condition_impact_change) + (hospital_hand_foot_mouth_total * hospital_hand_foot_mouth_impact_change) + (hospital_dengue_fever_total * hospital_dengue_fever_impact_change) + (hospital_type2_dybetes_total * hospital_type2_dybetes_impact_change) + (hospital_influenza_total * hospital_influenza_impact_change) + (hospital_colon_cancer_total * hospital_colon_cancer_impact_change) + (hospital_illness7_total * hospital_illness7_impact_change) + (hospital_illness8_total * hospital_illness8_impact_change) + (hospital_illness9_total * hospital_illness9_impact_change) + (hospital_illness10_total * hospital_illness10_impact_change);

     var technical_rates_firstpart = (inflated_perms_per_emp_hospital_A * new_number_emp_hospital_plan_A) + (inflated_perms_per_emp_hospital_B * new_number_emp_hospital_plan_B) + (inflated_perms_per_emp_hospital_C * new_number_emp_hospital_plan_C) + (inflated_perms_per_emp_hospital_D * new_number_emp_hospital_plan_D) + (inflated_perms_per_emp_hospital_E * new_number_emp_hospital_plan_E);
     var technical_rates_firstpart_ano = (actual_loss_ratio_hospital - pricing_loss_ratio_hospital);
     var technical_rates_secondpart = total_premiums_hospital;
     var technical_rates_thirdpart = factor_for_loss_ratio_recovery_hospital_surgical + healthcare_adjustment_hospital;

     var technical_rate_hospital = (technical_rates_firstpart + technical_rates_firstpart_ano) * technical_rates_secondpart * technical_rates_thirdpart;

     var min_reduction_hospital = -20 / 100;
     var max_increase_hospital = 30 / 100;
     var rate_adjustment_market_factors_hospital = 0 / 100;

     var min_hospital_plan_A = Math.max(((planwise_losses_plan_A / total_planwise_premium_plan_A) - pricing_loss_ratio_hospital), min_reduction_hospital);
     var min_hospital_plan_B = Math.max(((planwise_losses_plan_B / total_planwise_premium_plan_B) - pricing_loss_ratio_hospital), min_reduction_hospital);
     var min_hospital_plan_C = Math.max(((planwise_losses_plan_C / total_planwise_premium_plan_C) - pricing_loss_ratio_hospital), min_reduction_hospital);
     var min_hospital_plan_D = Math.max(((planwise_losses_plan_D / total_planwise_premium_plan_D) - pricing_loss_ratio_hospital), min_reduction_hospital);
     var min_hospital_plan_E = Math.max(((planwise_losses_plan_E / total_planwise_premium_plan_E) - pricing_loss_ratio_hospital), min_reduction_hospital);

     var max_hospital_plan_A = Math.min(((planwise_losses_plan_A / total_planwise_premium_plan_A) - pricing_loss_ratio_hospital), max_increase_hospital);
     var max_hospital_plan_B = Math.min(((planwise_losses_plan_B / total_planwise_premium_plan_B) - pricing_loss_ratio_hospital), max_increase_hospital);
     var max_hospital_plan_C = Math.min(((planwise_losses_plan_C / total_planwise_premium_plan_C) - pricing_loss_ratio_hospital), max_increase_hospital);
     var max_hospital_plan_D = Math.min(((planwise_losses_plan_D / total_planwise_premium_plan_D) - pricing_loss_ratio_hospital), max_increase_hospital);
     var max_hospital_plan_E = Math.min(((planwise_losses_plan_E / total_planwise_premium_plan_E) - pricing_loss_ratio_hospital), max_increase_hospital);

     var select_hospital_plan_A;
     var select_hospital_plan_B;
     var select_hospital_plan_C;
     var select_hospital_plan_D;
     var select_hospital_plan_E;

     if (min_hospital_plan_A <= min_reduction_hospital) {
         select_hospital_plan_A = min_reduction_hospital;
     } else if (max_hospital_plan_A >= max_increase_hospital) {
         select_hospital_plan_A = max_increase_hospital;
     } else {
         select_hospital_plan_A = ((planwise_losses_plan_A / total_planwise_premium_plan_A) - pricing_loss_ratio_hospital);
     }


     if (min_hospital_plan_B <= min_reduction_hospital) {
         select_hospital_plan_B = min_reduction_hospital;
     } else if (max_hospital_plan_B >= max_increase_hospital) {
         select_hospital_plan_B = max_increase_hospital;
     } else {
         select_hospital_plan_B = ((planwise_losses_plan_B / total_planwise_premium_plan_B) - pricing_loss_ratio_hospital);
     }



     if (min_hospital_plan_C <= min_reduction_hospital) {
         select_hospital_plan_C = min_reduction_hospital;
     } else if (max_hospital_plan_C >= max_increase_hospital) {
         select_hospital_plan_C = max_increase_hospital;
     } else {
         select_hospital_plan_C = ((planwise_losses_plan_C / total_planwise_premium_plan_C) - pricing_loss_ratio_hospital);
     }


     if (min_hospital_plan_D <= min_reduction_hospital) {
         select_hospital_plan_D = min_reduction_hospital;
     } else if (max_hospital_plan_D >= max_increase_hospital) {
         select_hospital_plan_D = max_increase_hospital;
     } else {
         select_hospital_plan_D = ((planwise_losses_plan_D / total_planwise_premium_plan_D) - pricing_loss_ratio_hospital);
     }


     if (min_hospital_plan_E <= min_reduction_hospital) {
         select_hospital_plan_E = min_reduction_hospital;
     } else if (max_hospital_plan_E >= max_increase_hospital) {
         select_hospital_plan_E = max_increase_hospital;
     } else {
         select_hospital_plan_E = ((planwise_losses_plan_E / total_planwise_premium_plan_E) - pricing_loss_ratio_hospital);
     }


     var planwise_technical_rate_hospital_plan_A = (inflated_perms_per_emp_hospital_A * new_number_emp_hospital_plan_A) + (select_hospital_plan_A * total_planwise_premium_plan_A * factor_for_loss_ratio_recovery_hospital_surgical);
     var planwise_technical_rate_hospital_plan_B = (inflated_perms_per_emp_hospital_B * new_number_emp_hospital_plan_B) + (select_hospital_plan_B * total_planwise_premium_plan_B * factor_for_loss_ratio_recovery_hospital_surgical);
     var planwise_technical_rate_hospital_plan_C = (inflated_perms_per_emp_hospital_C * new_number_emp_hospital_plan_C) + (select_hospital_plan_C * total_planwise_premium_plan_C * factor_for_loss_ratio_recovery_hospital_surgical);
     var planwise_technical_rate_hospital_plan_D = (inflated_perms_per_emp_hospital_D * new_number_emp_hospital_plan_D) + (select_hospital_plan_D * total_planwise_premium_plan_D * factor_for_loss_ratio_recovery_hospital_surgical);
     var planwise_technical_rate_hospital_plan_E = (inflated_perms_per_emp_hospital_E * new_number_emp_hospital_plan_E) + (select_hospital_plan_E * total_planwise_premium_plan_E * factor_for_loss_ratio_recovery_hospital_surgical);


     var techrates_perpetual_hospital_plan_A = (planwise_technical_rate_hospital_plan_A + (potential_claims_1_A * facors_for_perpetual_claims)) * (1 + rate_adjustment_for_market_factors);
     var techrates_perpetual_hospital_plan_B = (planwise_technical_rate_hospital_plan_B + (potential_claims_1_B * facors_for_perpetual_claims)) * (1 + rate_adjustment_for_market_factors);
     var techrates_perpetual_hospital_plan_C = (planwise_technical_rate_hospital_plan_C + (potential_claims_1_C * facors_for_perpetual_claims)) * (1 + rate_adjustment_for_market_factors);
     var techrates_perpetual_hospital_plan_D = (planwise_technical_rate_hospital_plan_D + (potential_claims_1_D * facors_for_perpetual_claims)) * (1 + rate_adjustment_for_market_factors);
     var techrates_perpetual_hospital_plan_E = (planwise_technical_rate_hospital_plan_E + (potential_claims_1_E * facors_for_perpetual_claims)) * (1 + rate_adjustment_for_market_factors);

     var techrate_peremp_hospital_plan_A = techrates_perpetual_hospital_plan_A / new_number_emp_hospital_plan_A;
     var techrate_peremp_hospital_plan_B = techrates_perpetual_hospital_plan_B / new_number_emp_hospital_plan_B;
     var techrate_peremp_hospital_plan_C = techrates_perpetual_hospital_plan_C / new_number_emp_hospital_plan_C;
     var techrate_peremp_hospital_plan_D = techrates_perpetual_hospital_plan_D / new_number_emp_hospital_plan_D;
     var techrate_peremp_hospital_plan_E = techrates_perpetual_hospital_plan_E / new_number_emp_hospital_plan_E;

     var adjusted_techrate_peremp_hospital_plan_A = techrate_peremp_hospital_plan_A * (1 + rate_adjustment_market_factors_hospital);
     var adjusted_techrate_peremp_hospital_plan_B = techrate_peremp_hospital_plan_B * (1 + rate_adjustment_market_factors_hospital);
     var adjusted_techrate_peremp_hospital_plan_C = techrate_peremp_hospital_plan_C * (1 + rate_adjustment_market_factors_hospital);
     var adjusted_techrate_peremp_hospital_plan_D = techrate_peremp_hospital_plan_D * (1 + rate_adjustment_market_factors_hospital);
     var adjusted_techrate_peremp_hospital_plan_E = techrate_peremp_hospital_plan_E * (1 + rate_adjustment_market_factors_hospital);

     var stat_percentage_change_tech_premium_term_life = (term_life_renewal_1 - adjusted_tech_rate_term_life) / adjusted_tech_rate_term_life;

     var stat_percentage_change_tech_premium_critical_illness = (critical_illness_renewal_1 - adjusted_tech_rate_critical_illness) / adjusted_tech_rate_critical_illness;

     var stat_percentage_change_tech_premium_personal_accident = (personal_accident_renewal_1 - adjusted_tech_rate_personal_accident) / adjusted_tech_rate_personal_accident;

     var stat_percentage_change_tech_premium_disability_income = (disability_income_renewal_1 - adjusted_tech_rate_disability_income) / adjusted_tech_rate_disability_income;

     var stat_percentage_change_tech_premium_outpatient = (outpatient_renewal_1 - adjusted_tech_rate_out_patient) / adjusted_tech_rate_out_patient;

     var stat_percentage_change_tech_premium_specialist = (specialist_renewal_1 - adjusted_tech_rate_specialist) / adjusted_tech_rate_specialist;

     var stat_percentage_change_tech_premium_dental = (dental_renewal_1 - adjusted_tech_rate_dental) / adjusted_tech_rate_dental;


     var stat_percentage_change_tech_premium__hospital_plan_A = (adjusted_techrate_peremp_hospital_plan_A - hospital_surgical_renewal_A_1) / adjusted_techrate_peremp_hospital_plan_A;
     var stat_percentage_change_tech_premium__hospital_plan_B = (adjusted_techrate_peremp_hospital_plan_B - hospital_surgical_renewal_B_1) / adjusted_techrate_peremp_hospital_plan_B;
     var stat_percentage_change_tech_premium__hospital_plan_C = (adjusted_techrate_peremp_hospital_plan_C - hospital_surgical_renewal_C_1) / adjusted_techrate_peremp_hospital_plan_C;
     var stat_percentage_change_tech_premium__hospital_plan_D = (adjusted_techrate_peremp_hospital_plan_D - hospital_surgical_renewal_D_1) / adjusted_techrate_peremp_hospital_plan_D;
     var stat_percentage_change_tech_premium__hospital_plan_E = (adjusted_techrate_peremp_hospital_plan_E - hospital_surgical_renewal_E_1) / adjusted_techrate_peremp_hospital_plan_E;


     var comparison_term_life_existing = term_life_1;
     var comparison_term_life_calculated = adjusted_tech_rate_term_life;
     comparison_term_life_calculated = comparison_term_life_calculated ? comparison_term_life_calculated : 0;
     var comparison_term_life_renewal = term_life_renewal_1;
     var remarks_for_termlife;

     if (stat_percentage_change_tech_premium_term_life <= thresholds_for_all_products1) {
         remarks_for_termlife = "Underpriced";
     } else if ((stat_percentage_change_tech_premium_term_life > thresholds_for_all_products1) && (stat_percentage_change_tech_premium_term_life <= thresholds_for_all_products2)) {

         remarks_for_termlife = "Slightly Underpriced";
     } else if ((stat_percentage_change_tech_premium_term_life > thresholds_for_all_products2) && (stat_percentage_change_tech_premium_term_life <= thresholds_for_all_products3)) {

         remarks_for_termlife = "Fairly priced";
     } else if ((stat_percentage_change_tech_premium_term_life > thresholds_for_all_products3) && (stat_percentage_change_tech_premium_term_life <= thresholds_for_all_products4)) {

         remarks_for_termlife = "Slightly Overpriced";
     } else if (stat_percentage_change_tech_premium_term_life > thresholds_for_all_products4) {

         remarks_for_termlife = "Overpriced";
     } else {

         remarks_for_termlife = "";
     }

     document.getElementById("result_1").value = comparison_term_life_existing;
     document.getElementById("result_2").value = comparison_term_life_renewal;
     document.getElementById("result_3").value = remarks_for_termlife;

     var comparison_critical_illness_existing = critical_illness_1;
     var comparison_critical_illness_calculated = adjusted_tech_rate_critical_illness;
     comparison_critical_illness_calculated = comparison_critical_illness_calculated ? comparison_critical_illness_calculated : 0;
     var comparison_critical_illness_renewal = critical_illness_renewal_1;
     var remarks_for_criticalillness;


     if (stat_percentage_change_tech_premium_critical_illness <= thresholds_for_all_products1) {
         remarks_for_criticalillness = "Underpriced";

     } else if ((stat_percentage_change_tech_premium_critical_illness > thresholds_for_all_products1) && (stat_percentage_change_tech_premium_critical_illness <= thresholds_for_all_products2)) {

         remarks_for_criticalillness = "Slightly Underpriced";

     } else if ((stat_percentage_change_tech_premium_critical_illness > thresholds_for_all_products2) && (stat_percentage_change_tech_premium_critical_illness <= thresholds_for_all_products3)) {

         remarks_for_criticalillness = "Fairly priced";

     } else if ((stat_percentage_change_tech_premium_critical_illness > thresholds_for_all_products3) && (stat_percentage_change_tech_premium_critical_illness <= thresholds_for_all_products4)) {

         remarks_for_criticalillness = "Slightly Overpriced";

     } else if (stat_percentage_change_tech_premium_critical_illness > thresholds_for_all_products4) {
         remarks_for_criticalillness = "Overpriced";

     } else {

         remarks_for_criticalillness = "";
     }

     document.getElementById("result_4").value = comparison_critical_illness_existing;
     document.getElementById("result_5").value = comparison_critical_illness_renewal;
     document.getElementById("result_6").value = remarks_for_criticalillness;

     var comparison_personal_accident_existing = personal_accident_1;
     var comparison_personal_accident_calculated = adjusted_tech_rate_personal_accident;
     comparison_personal_accident_calculated = comparison_personal_accident_calculated ? comparison_personal_accident_calculated : 0;
     var comparison_personal_accident_renewal = personal_accident_renewal_1;
     var remarks_for_personalaccident;


     if (stat_percentage_change_tech_premium_personal_accident <= thresholds_for_all_products1) {
         remarks_for_personalaccident = "Underpriced";

     } else if ((stat_percentage_change_tech_premium_personal_accident > thresholds_for_all_products1) && (stat_percentage_change_tech_premium_personal_accident <= thresholds_for_all_products2)) {

         remarks_for_personalaccident = "Slightly Underpriced";

     } else if ((stat_percentage_change_tech_premium_personal_accident > thresholds_for_all_products2) && (stat_percentage_change_tech_premium_personal_accident <= thresholds_for_all_products3)) {

         remarks_for_personalaccident = "Fairly priced";

     } else if ((stat_percentage_change_tech_premium_personal_accident > thresholds_for_all_products3) && (stat_percentage_change_tech_premium_personal_accident <= thresholds_for_all_products4)) {

         remarks_for_personalaccident = "Slightly Overpriced";

     } else if (stat_percentage_change_tech_premium_personal_accident > thresholds_for_all_products4) {
         remarks_for_personalaccident = "Overpriced";

     } else {

         remarks_for_personalaccident = "";
     }

     document.getElementById("result_7").value = comparison_personal_accident_existing;
     document.getElementById("result_8").value = comparison_personal_accident_renewal;
     document.getElementById("result_9").value = remarks_for_personalaccident;


     var comparison_disability_income_existing = disability_income_1;
     var comparison_disability_income_calculated = adjusted_tech_rate_disability_income;
     comparison_disability_income_calculated = comparison_disability_income_calculated ? comparison_disability_income_calculated : 0;
     var comparison_disability_income_renewal = disability_income_renewal_1;
     var remarks_for_disabilityincome;



     if (stat_percentage_change_tech_premium_disability_income <= thresholds_for_all_products1) {
         remarks_for_disabilityincome = "Underpriced";

     } else if ((stat_percentage_change_tech_premium_disability_income > thresholds_for_all_products1) && (stat_percentage_change_tech_premium_disability_income <= thresholds_for_all_products2)) {

         remarks_for_disabilityincome = "Slightly Underpriced";

     } else if ((stat_percentage_change_tech_premium_disability_income > thresholds_for_all_products2) && (stat_percentage_change_tech_premium_disability_income <= thresholds_for_all_products3)) {

         remarks_for_disabilityincome = "Fairly priced";

     } else if ((stat_percentage_change_tech_premium_disability_income > thresholds_for_all_products3) && (stat_percentage_change_tech_premium_disability_income <= thresholds_for_all_products4)) {

         remarks_for_disabilityincome = "Slightly Overpriced";

     } else if (stat_percentage_change_tech_premium_disability_income > thresholds_for_all_products4) {
         remarks_for_disabilityincome = "Overpriced";

     } else {

         remarks_for_disabilityincome = "";
     }

     document.getElementById("result_10").value = comparison_disability_income_existing;
     document.getElementById("result_11").value = comparison_disability_income_renewal;
     document.getElementById("result_12").value = remarks_for_disabilityincome;


     var comparison_outpatient_existing = out_patient_1;
     var comparison_outpatient_calculated = adjusted_tech_rate_out_patient;
     comparison_outpatient_calculated = comparison_outpatient_calculated ? comparison_outpatient_calculated : 0;
     var comparison_outpatient_renewal = outpatient_renewal_1;
     var remarks_for_outpatient;

     if (stat_percentage_change_tech_premium_outpatient <= thresholds_for_all_products1) {
         remarks_for_outpatient = "Underpriced";

     } else if ((stat_percentage_change_tech_premium_outpatient > thresholds_for_all_products1) && (stat_percentage_change_tech_premium_outpatient <= thresholds_for_all_products2)) {

         remarks_for_outpatient = "Slightly Underpriced";

     } else if ((stat_percentage_change_tech_premium_outpatient > thresholds_for_all_products2) && (stat_percentage_change_tech_premium_outpatient <= thresholds_for_all_products3)) {

         remarks_for_outpatient = "Fairly priced";

     } else if ((stat_percentage_change_tech_premium_outpatient > thresholds_for_all_products3) && (stat_percentage_change_tech_premium_outpatient <= thresholds_for_all_products4)) {

         remarks_for_outpatient = "Slightly Overpriced";

     } else if (stat_percentage_change_tech_premium_outpatient > thresholds_for_all_products4) {
         remarks_for_outpatient = "Overpriced";

     } else {

         remarks_for_outpatient = "";
     }

     document.getElementById("result_28").value = comparison_outpatient_existing;
     document.getElementById("result_29").value = comparison_outpatient_renewal;
     document.getElementById("result_30").value = remarks_for_outpatient;


     var comparison_dental_existing = dental_1;
     var comparison_dental_calculated = adjusted_tech_rate_dental;
     comparison_dental_calculated = comparison_dental_calculated ? comparison_dental_calculated : 0;
     var comparison_dental_renewal = dental_renewal_1;
     var remarks_for_dental;

     if (stat_percentage_change_tech_premium_dental <= thresholds_for_all_products1) {
         remarks_for_dental = "Underpriced";

     } else if ((stat_percentage_change_tech_premium_dental > thresholds_for_all_products1) && (stat_percentage_change_tech_premium_dental <= thresholds_for_all_products2)) {

         remarks_for_dental = "Slightly Underpriced";

     } else if ((stat_percentage_change_tech_premium_dental > thresholds_for_all_products2) && (stat_percentage_change_tech_premium_dental <= thresholds_for_all_products3)) {

         remarks_for_dental = "Fairly priced";

     } else if ((stat_percentage_change_tech_premium_dental > thresholds_for_all_products3) && (stat_percentage_change_tech_premium_dental <= thresholds_for_all_products4)) {

         remarks_for_dental = "Slightly Overpriced";

     } else if (stat_percentage_change_tech_premium_dental > thresholds_for_all_products4) {
         remarks_for_dental = "Overpriced";

     } else {

         remarks_for_dental = "";
     }

     document.getElementById("result_34").value = comparison_dental_existing;
     document.getElementById("result_35").value = comparison_dental_renewal;
     document.getElementById("result_36").value = remarks_for_dental;


     var comparison_specialist_existing = specialist_1;
     var comparison_specialist_calculated = adjusted_tech_rate_specialist;
     comparison_specialist_calculated = comparison_specialist_calculated ? comparison_specialist_calculated : 0;
     var comparison_specialist_renewal = specialist_renewal_1;
     var remarks_for_specialist;

     if (stat_percentage_change_tech_premium_specialist <= thresholds_for_all_products1) {
         remarks_for_specialist = "Underpriced";

     } else if ((stat_percentage_change_tech_premium_specialist > thresholds_for_all_products1) && (stat_percentage_change_tech_premium_specialist <= thresholds_for_all_products2)) {

         remarks_for_specialist = "Slightly Underpriced";

     } else if ((stat_percentage_change_tech_premium_specialist > thresholds_for_all_products2) && (stat_percentage_change_tech_premium_specialist <= thresholds_for_all_products3)) {

         remarks_for_specialist = "Fairly priced";

     } else if ((stat_percentage_change_tech_premium_specialist > thresholds_for_all_products3) && (stat_percentage_change_tech_premium_specialist <= thresholds_for_all_products4)) {

         remarks_for_specialist = "Slightly Overpriced";

     } else if (stat_percentage_change_tech_premium_specialist > thresholds_for_all_products4) {
         remarks_for_specialist = "Overpriced";

     } else {

         remarks_for_specialist = "";
     }

     document.getElementById("result_31").value = comparison_specialist_existing;
     document.getElementById("result_32").value = comparison_specialist_renewal;
     document.getElementById("result_33").value = remarks_for_specialist;


     var comparison_hospital_plan_A_existing = hospital_surgical_1_A;
     var comparison_hospital_plan_A_calculated = techrate_peremp_hospital_plan_A;
     comparison_hospital_plan_A_calculated = comparison_hospital_plan_A_calculated ? comparison_hospital_plan_A_calculated : 0;
     var comparison_hospital_plan_A_renewal = hospital_surgical_renewal_A_1;
     var remarks_for_hospital_plan_A;

     if (stat_percentage_change_tech_premium__hospital_plan_A <= thresholds_for_all_products1) {

         remarks_for_hospital_plan_A = "Underpriced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_A > thresholds_for_all_products1) && (stat_percentage_change_tech_premium__hospital_plan_A <= thresholds_for_all_products2)) {

         remarks_for_hospital_plan_A = "Slightly Underpriced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_A > thresholds_for_all_products2) && (stat_percentage_change_tech_premium__hospital_plan_A <= thresholds_for_all_products3)) {

         remarks_for_hospital_plan_A = "Fairly priced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_A > thresholds_for_all_products3) && (stat_percentage_change_tech_premium__hospital_plan_A <= thresholds_for_all_products4)) {

         remarks_for_hospital_plan_A = "Slightly Overpriced";
     } else if (stat_percentage_change_tech_premium__hospital_plan_A > thresholds_for_all_products4) {

         remarks_for_hospital_plan_A = "Overpriced";
     } else {

         remarks_for_hospital_plan_A = "";
     }

     document.getElementById("result_13").value = comparison_hospital_plan_A_existing;
     document.getElementById("result_14").value = comparison_hospital_plan_A_renewal;
     document.getElementById("result_15").value = remarks_for_hospital_plan_A;


     var comparison_hospital_plan_B_existing = hospital_surgical_1_B;
     var comparison_hospital_plan_B_calculated = techrate_peremp_hospital_plan_B;
     comparison_hospital_plan_B_calculated = comparison_hospital_plan_B_calculated ? comparison_hospital_plan_B_calculated : 0;
     var comparison_hospital_plan_B_renewal = hospital_surgical_renewal_B_1;
     var remarks_for_hospital_plan_B;

     if (stat_percentage_change_tech_premium__hospital_plan_B <= thresholds_for_all_products1) {

         remarks_for_hospital_plan_B = "Underpriced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_B > thresholds_for_all_products1) && (stat_percentage_change_tech_premium__hospital_plan_B <= thresholds_for_all_products2)) {

         remarks_for_hospital_plan_B = "Slightly Underpriced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_B > thresholds_for_all_products2) && (stat_percentage_change_tech_premium__hospital_plan_B <= thresholds_for_all_products3)) {

         remarks_for_hospital_plan_B = "Fairly priced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_B > thresholds_for_all_products3) && (stat_percentage_change_tech_premium__hospital_plan_B <= thresholds_for_all_products4)) {

         remarks_for_hospital_plan_B = "Slightly Overpriced";
     } else if (stat_percentage_change_tech_premium__hospital_plan_B > thresholds_for_all_products4) {

         remarks_for_hospital_plan_B = "Overpriced";
     } else {

         remarks_for_hospital_plan_B = "";
     }

     document.getElementById("result_16").value = comparison_hospital_plan_B_existing;
     document.getElementById("result_17").value = comparison_hospital_plan_B_renewal;
     document.getElementById("result_18").value = remarks_for_hospital_plan_B;



     var comparison_hospital_plan_C_existing = hospital_surgical_1_C;
     var comparison_hospital_plan_C_calculated = techrate_peremp_hospital_plan_C;
     comparison_hospital_plan_C_calculated = comparison_hospital_plan_C_calculated ? comparison_hospital_plan_C_calculated : 0;
     var comparison_hospital_plan_C_renewal = hospital_surgical_renewal_C_1;
     var remarks_for_hospital_plan_C;

     if (stat_percentage_change_tech_premium__hospital_plan_C <= thresholds_for_all_products1) {

         remarks_for_hospital_plan_C = "Underpriced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_C > thresholds_for_all_products1) && (stat_percentage_change_tech_premium__hospital_plan_C <= thresholds_for_all_products2)) {

         remarks_for_hospital_plan_C = "Slightly Underpriced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_C > thresholds_for_all_products2) && (stat_percentage_change_tech_premium__hospital_plan_C <= thresholds_for_all_products3)) {

         remarks_for_hospital_plan_C = "Fairly priced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_C > thresholds_for_all_products3) && (stat_percentage_change_tech_premium__hospital_plan_C <= thresholds_for_all_products4)) {

         remarks_for_hospital_plan_C = "Slightly Overpriced";
     } else if (stat_percentage_change_tech_premium__hospital_plan_C > thresholds_for_all_products4) {

         remarks_for_hospital_plan_C = "Overpriced";
     } else {

         remarks_for_hospital_plan_C = "";
     }

     document.getElementById("result_19").value = comparison_hospital_plan_C_existing;
     document.getElementById("result_20").value = comparison_hospital_plan_C_renewal;
     document.getElementById("result_21").value = remarks_for_hospital_plan_C;



     var comparison_hospital_plan_D_existing = hospital_surgical_1_D;
     var comparison_hospital_plan_D_calculated = techrate_peremp_hospital_plan_D;
     comparison_hospital_plan_D_calculated = comparison_hospital_plan_D_calculated ? comparison_hospital_plan_D_calculated : 0;
     var comparison_hospital_plan_D_renewal = hospital_surgical_renewal_D_1;
     var remarks_for_hospital_plan_D;

     if (stat_percentage_change_tech_premium__hospital_plan_D <= thresholds_for_all_products1) {

         remarks_for_hospital_plan_D = "Underpriced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_D > thresholds_for_all_products1) && (stat_percentage_change_tech_premium__hospital_plan_D <= thresholds_for_all_products2)) {

         remarks_for_hospital_plan_D = "Slightly Underpriced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_D > thresholds_for_all_products2) && (stat_percentage_change_tech_premium__hospital_plan_D <= thresholds_for_all_products3)) {

         remarks_for_hospital_plan_D = "Fairly priced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_D > thresholds_for_all_products3) && (stat_percentage_change_tech_premium__hospital_plan_D <= thresholds_for_all_products4)) {

         remarks_for_hospital_plan_D = "Slightly Overpriced";
     } else if (stat_percentage_change_tech_premium__hospital_plan_D > thresholds_for_all_products4) {

         remarks_for_hospital_plan_D = "Overpriced";
     } else {

         remarks_for_hospital_plan_D = "";
     }


     document.getElementById("result_22").value = comparison_hospital_plan_D_existing;
     document.getElementById("result_23").value = comparison_hospital_plan_D_renewal;
     document.getElementById("result_24").value = remarks_for_hospital_plan_D;



     var comparison_hospital_plan_E_existing = hospital_surgical_1_E;
     var comparison_hospital_plan_E_calculated = techrate_peremp_hospital_plan_E;
     comparison_hospital_plan_E_calculated = comparison_hospital_plan_E_calculated ? comparison_hospital_plan_E_calculated : 0;
     var comparison_hospital_plan_E_renewal = hospital_surgical_renewal_E_1;
     var remarks_for_hospital_plan_E;

     if (stat_percentage_change_tech_premium__hospital_plan_E <= thresholds_for_all_products1) {

         remarks_for_hospital_plan_E = "Underpriced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_E > thresholds_for_all_products1) && (stat_percentage_change_tech_premium__hospital_plan_E <= thresholds_for_all_products2)) {

         remarks_for_hospital_plan_E = "Slightly Underpriced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_E > thresholds_for_all_products2) && (stat_percentage_change_tech_premium__hospital_plan_E <= thresholds_for_all_products3)) {

         remarks_for_hospital_plan_E = "Fairly priced";
     } else if ((stat_percentage_change_tech_premium__hospital_plan_E > thresholds_for_all_products3) && (stat_percentage_change_tech_premium__hospital_plan_E <= thresholds_for_all_products4)) {

         remarks_for_hospital_plan_E = "Slightly Overpriced";
     } else if (stat_percentage_change_tech_premium__hospital_plan_E > thresholds_for_all_products4) {

         remarks_for_hospital_plan_E = "Overpriced";
     } else {

         remarks_for_hospital_plan_E = "";
     }

     document.getElementById("result_25").value = comparison_hospital_plan_E_existing;
     document.getElementById("result_26").value = comparison_hospital_plan_E_renewal;
     document.getElementById("result_27").value = remarks_for_hospital_plan_E;


     var price_movement_termlife;
     var price_movement_criticalillness;
     var price_movement_personalaccident;
     var price_movement_disabilityincome;
     var price_movement_outpatient;
     var price_movement_dental;
     var price_movement_specialist;
     var price_movement_hospital_plan_A;
     var price_movement_hospital_plan_B;
     var price_movement_hospital_plan_C;
     var price_movement_hospital_plan_D;
     var price_movement_hospital_plan_E;

     if (remarks_for_termlife == "") {
         price_movement_termlife = "";

     } else if (comparison_term_life_calculated > comparison_term_life_existing * thresholds_for_all_products4) {
         price_movement_termlife = "Significant increase expected";

     } else if (comparison_term_life_calculated > comparison_term_life_existing * (1 + thresholds_for_all_products3)) {
         price_movement_termlife = "Slight Increase expected";

     } else {
         price_movement_termlife = "Maintain price";

     }

     document.getElementById("price_1").value = price_movement_termlife;



     if (remarks_for_criticalillness == "") {
         price_movement_criticalillness = "";

     } else if (comparison_critical_illness_calculated > comparison_critical_illness_existing * thresholds_for_all_products4) {
         price_movement_criticalillness = "Significant increase expected";

     } else if (comparison_critical_illness_calculated > comparison_critical_illness_existing * (1 + thresholds_for_all_products3)) {
         price_movement_criticalillness = "Slight Increase expected";

     } else {
         price_movement_criticalillness = "Maintain price";

     }

     document.getElementById("price_2").value = price_movement_criticalillness;





     if (remarks_for_personalaccident == "") {
         price_movement_personalaccident = "";

     } else if (comparison_personal_accident_calculated > comparison_personal_accident_existing * thresholds_for_all_products4) {
         price_movement_personalaccident = "Significant increase expected";

     } else if (comparison_personal_accident_calculated > comparison_personal_accident_existing * (1 + thresholds_for_all_products3)) {
         price_movement_personalaccident = "Slight Increase expected";

     } else {
         price_movement_personalaccident = "Maintain price";

     }

     document.getElementById("price_3").value = price_movement_personalaccident;




     if (remarks_for_disabilityincome == "") {
         price_movement_disabilityincome = "";

     } else if (comparison_disability_income_calculated > comparison_disability_income_existing * thresholds_for_all_products4) {
         price_movement_disabilityincome = "Significant increase expected";

     } else if (comparison_disability_income_calculated > comparison_disability_income_existing * (1 + thresholds_for_all_products3)) {
         price_movement_disabilityincome = "Slight Increase expected";

     } else {
         price_movement_disabilityincome = "Maintain price";

     }

     document.getElementById("price_4").value = price_movement_disabilityincome;




     if (remarks_for_hospital_plan_A == "") {
         price_movement_hospital_plan_A = "";

     } else if (comparison_hospital_plan_A_calculated > comparison_hospital_plan_A_existing * thresholds_for_all_products4) {
         price_movement_hospital_plan_A = "Significant increase expected";

     } else if (comparison_hospital_plan_A_calculated > comparison_hospital_plan_A_existing * (1 + thresholds_for_all_products3)) {
         price_movement_hospital_plan_A = "Slight Increase expected";

     } else {
         price_movement_hospital_plan_A = "Maintain price";

     }

     document.getElementById("price_5").value = price_movement_hospital_plan_A;




     if (remarks_for_hospital_plan_B == "") {
         price_movement_hospital_plan_B = "";

     } else if (comparison_hospital_plan_B_calculated > comparison_hospital_plan_B_existing * thresholds_for_all_products4) {
         price_movement_hospital_plan_B = "Significant increase expected";

     } else if (comparison_hospital_plan_B_calculated > comparison_hospital_plan_B_existing * (1 + thresholds_for_all_products3)) {
         price_movement_hospital_plan_B = "Slight Increase expected";

     } else {
         price_movement_hospital_plan_B = "Maintain price";

     }

     document.getElementById("price_6").value = price_movement_hospital_plan_B;




     if (remarks_for_hospital_plan_C == "") {
         price_movement_hospital_plan_C = "";

     } else if (comparison_hospital_plan_C_calculated > comparison_hospital_plan_C_existing * thresholds_for_all_products4) {
         price_movement_hospital_plan_C = "Significant increase expected";

     } else if (comparison_hospital_plan_C_calculated > comparison_hospital_plan_C_existing * (1 + thresholds_for_all_products3)) {
         price_movement_hospital_plan_C = "Slight Increase expected";

     } else {
         price_movement_hospital_plan_C = "Maintain price";

     }

     document.getElementById("price_7").value = price_movement_hospital_plan_C;



     if (remarks_for_hospital_plan_D == "") {
         price_movement_hospital_plan_D = "";

     } else if (comparison_hospital_plan_D_calculated > comparison_hospital_plan_D_existing * thresholds_for_all_products4) {
         price_movement_hospital_plan_D = "Significant increase expected";

     } else if (comparison_hospital_plan_D_calculated > comparison_hospital_plan_D_existing * (1 + thresholds_for_all_products3)) {
         price_movement_hospital_plan_D = "Slight Increase expected";

     } else {
         price_movement_hospital_plan_D = "Maintain price";

     }

     document.getElementById("price_8").value = price_movement_hospital_plan_D;




     if (remarks_for_hospital_plan_E == "") {
         price_movement_hospital_plan_E = "";

     } else if (comparison_hospital_plan_E_calculated > comparison_hospital_plan_E_existing * thresholds_for_all_products4) {
         price_movement_hospital_plan_E = "Significant increase expected";

     } else if (comparison_hospital_plan_E_calculated > comparison_hospital_plan_E_existing * (1 + thresholds_for_all_products3)) {
         price_movement_hospital_plan_E = "Slight Increase expected";

     } else {
         price_movement_hospital_plan_E = "Maintain price";

     }

     document.getElementById("price_9").value = price_movement_hospital_plan_E;



     if (remarks_for_outpatient == "") {
         price_movement_outpatient = "";

     } else if (comparison_outpatient_calculated > comparison_outpatient_existing * thresholds_for_all_products4) {
         price_movement_outpatient = "Significant increase expected";

     } else if (comparison_outpatient_calculated > comparison_outpatient_existing * (1 + thresholds_for_all_products3)) {
         price_movement_outpatient = "Slight Increase expected";

     } else {
         price_movement_outpatient = "Maintain price";

     }

     document.getElementById("price_10").value = price_movement_outpatient;




     if (remarks_for_specialist == "") {
         price_movement_specialist = "";

     } else if (comparison_specialist_calculated > comparison_specialist_existing * thresholds_for_all_products4) {
         price_movement_specialist = "Significant increase expected";

     } else if (comparison_specialist_calculated > comparison_specialist_existing * (1 + thresholds_for_all_products3)) {
         price_movement_specialist = "Slight Increase expected";

     } else {
         price_movement_specialist = "Maintain price";

     }

     document.getElementById("price_11").value = price_movement_specialist;



     if (remarks_for_dental == "") {
         price_movement_dental = "";

     } else if (comparison_dental_calculated > comparison_dental_existing * thresholds_for_all_products4) {
         price_movement_dental = "Significant increase expected";

     } else if (comparison_dental_calculated > comparison_dental_existing * (1 + thresholds_for_all_products3)) {
         price_movement_dental = "Slight Increase expected";

     } else {
         price_movement_dental = "Maintain price";

     }

     document.getElementById("price_12").value = price_movement_dental;






     var againyesnoano = document.getElementById("yesnoano").value;
     if (againyesnoano == 1) {
         //alert(againyesnoano);
         document.getElementById("have_renewal").style.display = "block";
         document.getElementById("have_renewal1").style.display = "block";
         document.getElementById("have_renewal2").style.display = "block";
         document.getElementById("have_renewal3").style.display = "block";
         document.getElementById("have_renewal4").style.display = "block";
         document.getElementById("have_renewal5").style.display = "block";
         document.getElementById("have_renewal6").style.display = "block";
         document.getElementById("have_renewal7").style.display = "block";
         document.getElementById("have_renewal8").style.display = "block";
         document.getElementById("have_renewal9").style.display = "block";
         document.getElementById("have_renewal10").style.display = "block";
         document.getElementById("have_renewal11").style.display = "block";
         document.getElementById("have_renewal12").style.display = "block";

         document.getElementById("no_renewal").style.display = "none";
         document.getElementById("no_renewal1").style.display = "none";
         document.getElementById("no_renewal2").style.display = "none";
         document.getElementById("no_renewal3").style.display = "none";
         document.getElementById("no_renewal4").style.display = "none";
         document.getElementById("no_renewal5").style.display = "none";
         document.getElementById("no_renewal6").style.display = "none";
         document.getElementById("no_renewal7").style.display = "none";
         document.getElementById("no_renewal8").style.display = "none";
         document.getElementById("no_renewal9").style.display = "none";
         document.getElementById("no_renewal10").style.display = "none";
         document.getElementById("no_renewal11").style.display = "none";
         document.getElementById("no_renewal12").style.display = "none";

     } else {
         //alert(againyesnoano);
         document.getElementById("no_renewal").style.display = "block";
         document.getElementById("no_renewal1").style.display = "block";
         document.getElementById("no_renewal2").style.display = "block";
         document.getElementById("no_renewal3").style.display = "block";
         document.getElementById("no_renewal4").style.display = "block";
         document.getElementById("no_renewal5").style.display = "block";
         document.getElementById("no_renewal6").style.display = "block";
         document.getElementById("no_renewal7").style.display = "block";
         document.getElementById("no_renewal8").style.display = "block";
         document.getElementById("no_renewal9").style.display = "block";
         document.getElementById("no_renewal10").style.display = "block";
         document.getElementById("no_renewal11").style.display = "block";
         document.getElementById("no_renewal12").style.display = "block";


         document.getElementById("have_renewal").style.display = "none";
         document.getElementById("have_renewal1").style.display = "none";
         document.getElementById("have_renewal2").style.display = "none";
         document.getElementById("have_renewal3").style.display = "none";
         document.getElementById("have_renewal4").style.display = "none";
         document.getElementById("have_renewal5").style.display = "none";
         document.getElementById("have_renewal6").style.display = "none";
         document.getElementById("have_renewal7").style.display = "none";
         document.getElementById("have_renewal8").style.display = "none";
         document.getElementById("have_renewal9").style.display = "none";
         document.getElementById("have_renewal10").style.display = "none";
         document.getElementById("have_renewal11").style.display = "none";
         document.getElementById("have_renewal12").style.display = "none";

     }





 }



 //roi start from here

 function benchmark_result() {
     var cat_overall_outpatient_column1 = 60 / 100;
     var cat_overall_outpatient_column2 = 2.9;
     var cat_overall_hospital_column1 = 6 / 100;
     var cat_overall_hospital_column2 = 0.8;

     var total_cat_overall_outpatient_hospital_col1 = cat_overall_outpatient_column1 + cat_overall_hospital_column1;
     var total_cat_overall_outpatient_hospital_col2 = cat_overall_outpatient_column2 + cat_overall_hospital_column2;


     // var cat_accomodation_outpatient_column1 = 42.1 / 100;
     var cat_accomodation_outpatient_column1 = 68.8 / 100;
     // var cat_accomodation_outpatient_column2 = 1.8;
     var cat_accomodation_outpatient_column2 = 3.3;
     // var cat_accomodation_hospital_column1 = 3 / 100;
     var cat_accomodation_hospital_column1 = 4.5 / 100;
     // var cat_accomodation_hospital_column2 = 0.5;
     var cat_accomodation_hospital_column2 = 0.6;

     var total_cat_accomodation_outpatient_hospital_col1 = cat_accomodation_outpatient_column1 + cat_accomodation_hospital_column1;
     var total_cat_accomodation_outpatient_hospital_col2 = cat_accomodation_outpatient_column2 + cat_accomodation_hospital_column2;


     var cat_administrative_outpatient_column1 = 45.7 / 100;
     var cat_administrative_outpatient_column2 = 2.0;
     var cat_administrative_hospital_column1 = 4.5 / 100;
     var cat_administrative_hospital_column2 = 0.8;

     var total_cat_administrative_outpatient_hospital_col1 = cat_administrative_outpatient_column1 + cat_administrative_hospital_column1;
     var total_cat_administrative_outpatient_hospital_col2 = cat_administrative_outpatient_column2 + cat_administrative_hospital_column2;


     var cat_community_outpatient_column1 = 65.6 / 100;
     var cat_community_outpatient_column2 = 3.6;
     var cat_community_hospital_column1 = 9.4 / 100;
     var cat_community_hospital_column2 = 1.3;

     var total_cat_community_outpatient_hospital_col1 = cat_community_outpatient_column1 + cat_community_hospital_column1;
     var total_cat_community_outpatient_hospital_col2 = cat_community_outpatient_column2 + cat_community_hospital_column2;


     var cat_construction_outpatient_column1 = 43.8 / 100;
     var cat_construction_outpatient_column2 = 1.5;
     var cat_construction_hospital_column1 = 2.6 / 100;
     var cat_construction_hospital_column2 = 0.4;

     var total_cat_construction_outpatient_hospital_col1 = cat_construction_outpatient_column1 + cat_construction_hospital_column1;
     var total_cat_construction_outpatient_hospital_col2 = cat_construction_outpatient_column2 + cat_construction_hospital_column2;


     var cat_financial_outpatient_column1 = 69.6 / 100;
     var cat_financial_outpatient_column2 = 2.9;
     var cat_financial_hospital_column1 = 6.5 / 100;
     var cat_financial_hospital_column2 = 0.8;

     var total_cat_financial_outpatient_hospital_col1 = cat_financial_outpatient_column1 + cat_financial_hospital_column1;
     var total_cat_financial_outpatient_hospital_col2 = cat_financial_outpatient_column2 + cat_financial_hospital_column2;


     var cat_information_outpatient_column1 = 68.8 / 100;
     var cat_information_outpatient_column2 = 3.3;
     var cat_information_hospital_column1 = 4.5 / 100;
     var cat_information_hospital_column2 = 0.6;

     var total_cat_information_outpatient_hospital_col1 = cat_information_outpatient_column1 + cat_information_hospital_column1;
     var total_cat_information_outpatient_hospital_col2 = cat_information_outpatient_column2 + cat_information_hospital_column2;


     var cat_manufacturing_outpatient_column1 = 68.8 / 100;
     var cat_manufacturing_outpatient_column2 = 3.4;
     var cat_manufacturing_hospital_column1 = 5.5 / 100;
     var cat_manufacturing_hospital_column2 = 0.8;

     var total_cat_manufacturing_outpatient_hospital_col1 = cat_manufacturing_outpatient_column1 + cat_manufacturing_hospital_column1;
     var total_cat_manufacturing_outpatient_hospital_col2 = cat_manufacturing_outpatient_column2 + cat_manufacturing_hospital_column2;


     var cat_other_outpatient_column1 = 73.5 / 100;
     var cat_other_outpatient_column2 = 4.6;
     var cat_other_hospital_column1 = 6.7 / 100;
     var cat_other_hospital_column2 = 1.4;

     var total_cat_other_outpatient_hospital_col1 = cat_other_outpatient_column1 + cat_other_hospital_column1;
     var total_cat_other_outpatient_hospital_col2 = cat_other_outpatient_column2 + cat_other_hospital_column2;


     var cat_professional_outpatient_column1 = 67.7 / 100;
     var cat_professional_outpatient_column2 = 3.0;
     var cat_professional_hospital_column1 = 8.6 / 100;
     var cat_professional_hospital_column2 = 0.7;

     var total_cat_professional_outpatient_hospital_col1 = cat_professional_outpatient_column1 + cat_professional_hospital_column1;
     var total_cat_professional_outpatient_hospital_col2 = cat_professional_outpatient_column2 + cat_professional_hospital_column2;


     var cat_realestate_outpatient_column1 = 62.4 / 100;
     var cat_realestate_outpatient_column2 = 3.2;
     var cat_realestate_hospital_column1 = 5.1 / 100;
     var cat_realestate_hospital_column2 = 0.9;

     var total_cat_realestate_outpatient_hospital_col1 = cat_realestate_outpatient_column1 + cat_realestate_hospital_column1;
     var total_cat_realestate_outpatient_hospital_col2 = cat_realestate_outpatient_column2 + cat_realestate_hospital_column2;


     var cat_retail_outpatient_column1 = 47 / 100;
     var cat_retail_outpatient_column2 = 2.2;
     var cat_retail_hospital_column1 = 6.9 / 100;
     var cat_retail_hospital_column2 = 0.8;

     var total_cat_retail_outpatient_hospital_col1 = cat_retail_outpatient_column1 + cat_retail_hospital_column1;
     var total_cat_retail_outpatient_hospital_col2 = cat_retail_outpatient_column2 + cat_retail_hospital_column2;


     var cat_transportation_outpatient_column1 = 62.5 / 100;
     var cat_transportation_outpatient_column2 = 3.5;
     var cat_transportation_hospital_column1 = 7.3 / 100;
     var cat_transportation_hospital_column2 = 1.6;

     var total_cat_transportation_outpatient_hospital_col1 = cat_transportation_outpatient_column1 + cat_transportation_hospital_column1;
     var total_cat_transportation_outpatient_hospital_col2 = cat_transportation_outpatient_column2 + cat_transportation_hospital_column2;


     var cat_wholesale_outpatient_column1 = 63.6 / 100;
     var cat_wholesale_outpatient_column2 = 2.9;
     var cat_wholesale_hospital_column1 = 4.8 / 100;
     var cat_wholesale_hospital_column2 = 0.7;

     var total_cat_wholesale_outpatient_hospital_col1 = cat_wholesale_outpatient_column1 + cat_wholesale_hospital_column1;
     var total_cat_wholesale_outpatient_hospital_col2 = cat_wholesale_outpatient_column2 + cat_wholesale_hospital_column2;




     var select_industry = parseInt(document.getElementById("select_industry").value);
     var text_1 = parseFloat(document.getElementById("text_1").value) / 100;
     var text_2 = parseFloat(document.getElementById("text_2").value);
     var text_3 = parseFloat(document.getElementById("text_3").value) / 100;
     var text_4 = parseFloat(document.getElementById("text_4").value);

     var Score_1a_accomodation = (text_1 / cat_accomodation_outpatient_column1); // cat_accomodation_outpatient_column1 = 68.8%
     var Score_1b_accomodation = (text_2 / cat_accomodation_outpatient_column2);
     var Score_2a_accomodation = (text_3 / cat_accomodation_hospital_column1);
     var Score_2b_accomodation = (text_4 / cat_accomodation_hospital_column2);
     var avg_score_accomodation = ((Score_1a_accomodation + Score_1b_accomodation + Score_2a_accomodation + Score_2b_accomodation) / 4);

     var Score_1a_administrative = (text_1 / cat_administrative_outpatient_column1);
     var Score_1b_administrative = (text_2 / cat_administrative_outpatient_column2);
     var Score_2a_administrative = (text_3 / cat_administrative_hospital_column1);
     var Score_2b_administrative = (text_4 / cat_administrative_hospital_column2);
     var avg_score_administrative = ((Score_1a_administrative + Score_1b_administrative + Score_2a_administrative + Score_2b_administrative) / 4);



     var Score_1a_community = (text_1 / cat_community_outpatient_column1);
     var Score_1b_community = (text_2 / cat_community_outpatient_column2);
     var Score_2a_community = (text_3 / cat_community_hospital_column1);
     var Score_2b_community = (text_4 / cat_community_hospital_column2);
     var avg_score_community = ((Score_1a_community + Score_1b_community + Score_2a_community + Score_2b_community) / 4);



     var Score_1a_construction = (text_1 / cat_construction_outpatient_column1);
     var Score_1b_construction = (text_2 / cat_construction_outpatient_column2);
     var Score_2a_construction = (text_3 / cat_construction_hospital_column1);
     var Score_2b_construction = (text_4 / cat_construction_hospital_column2);
     var avg_score_construction = ((Score_1a_construction + Score_1b_construction + Score_2a_construction + Score_2b_construction) / 4);



     var Score_1a_financial = (text_1 / cat_financial_outpatient_column1);
     var Score_1b_financial = (text_2 / cat_financial_outpatient_column2);
     var Score_2a_financial = (text_3 / cat_financial_hospital_column1);
     var Score_2b_financial = (text_4 / cat_financial_hospital_column2);
     var avg_score_financial = ((Score_1a_financial + Score_1b_financial + Score_2a_financial + Score_2b_financial) / 4);


     var Score_1a_information = (text_1 / cat_information_outpatient_column1);
     var Score_1b_information = (text_2 / cat_information_outpatient_column2);
     var Score_2a_information = (text_3 / cat_information_hospital_column1);
     var Score_2b_information = (text_4 / cat_information_hospital_column2);
     var avg_score_information = ((Score_1a_information + Score_1b_information + Score_2a_information + Score_2b_information) / 4);



     var Score_1a_manufacturing = (text_1 / cat_manufacturing_outpatient_column1);
     var Score_1b_manufacturing = (text_2 / cat_manufacturing_outpatient_column2);
     var Score_2a_manufacturing = (text_3 / cat_manufacturing_hospital_column1);
     var Score_2b_manufacturing = (text_4 / cat_manufacturing_hospital_column2);
     var avg_score_manufacturing = ((Score_1a_manufacturing + Score_1b_manufacturing + Score_2a_manufacturing + Score_2b_manufacturing) / 4);


     var Score_1a_other = (text_1 / cat_other_outpatient_column1);
     var Score_1b_other = (text_2 / cat_other_outpatient_column2);
     var Score_2a_other = (text_3 / cat_other_hospital_column1);
     var Score_2b_other = (text_4 / cat_other_hospital_column2);
     var avg_score_other = ((Score_1a_other + Score_1b_other + Score_2a_other + Score_2b_other) / 4);


     var Score_1a_professional = (text_1 / cat_professional_outpatient_column1);
     var Score_1b_professional = (text_2 / cat_professional_outpatient_column2);
     var Score_2a_professional = (text_3 / cat_professional_hospital_column1);
     var Score_2b_professional = (text_4 / cat_professional_hospital_column2);
     var avg_score_professional = ((Score_1a_professional + Score_1b_professional + Score_2a_professional + Score_2b_professional) / 4);


     var Score_1a_realestate = (text_1 / cat_realestate_outpatient_column1);
     var Score_1b_realestate = (text_2 / cat_realestate_outpatient_column2);
     var Score_2a_realestate = (text_3 / cat_realestate_hospital_column1);
     var Score_2b_realestate = (text_4 / cat_realestate_hospital_column2);
     var avg_score_realestate = ((Score_1a_realestate + Score_1b_realestate + Score_2a_realestate + Score_2b_realestate) / 4);


     var Score_1a_retail = (text_1 / cat_retail_outpatient_column1);
     var Score_1b_retail = (text_2 / cat_retail_outpatient_column2);
     var Score_2a_retail = (text_3 / cat_retail_hospital_column1);
     var Score_2b_retail = (text_4 / cat_retail_hospital_column2);
     var avg_score_retail = ((Score_1a_retail + Score_1b_retail + Score_2a_retail + Score_2b_retail) / 4);


     var Score_1a_transportation = (text_1 / cat_transportation_outpatient_column1);
     var Score_1b_transportation = (text_2 / cat_transportation_outpatient_column2);
     var Score_2a_transportation = (text_3 / cat_transportation_hospital_column1);
     var Score_2b_transportation = (text_4 / cat_transportation_hospital_column2);
     var avg_score_transportation = ((Score_1a_transportation + Score_1b_transportation + Score_2a_transportation + Score_2b_transportation) / 4);


     var Score_1a_wholesale = (text_1 / cat_wholesale_outpatient_column1);
     var Score_1b_wholesale = (text_2 / cat_wholesale_outpatient_column2);
     var Score_2a_wholesale = (text_3 / cat_wholesale_hospital_column1);
     var Score_2b_wholesale = (text_4 / cat_wholesale_hospital_column2);
     var avg_score_wholesale = ((Score_1a_wholesale + Score_1b_wholesale + Score_2a_wholesale + Score_2b_wholesale) / 4);

     var benchmark_result;

     console.log('select_industry', select_industry);
     if (select_industry == 1) {
         console.log('avg_score_accomodation', avg_score_accomodation)
         if (avg_score_accomodation < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_accomodation > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 2) {

         if (avg_score_administrative < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_administrative > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 3) {

         if (avg_score_community < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_community > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 4) {

         if (avg_score_construction < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_construction > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 5) {

         if (avg_score_financial < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_financial > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 6) {

         if (avg_score_information < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_information > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 7) {

         if (avg_score_manufacturing < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_manufacturing > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 8) {

         if (avg_score_other < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_other > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }



     if (select_industry == 9) {

         if (avg_score_professional < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_professional > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 10) {

         if (avg_score_realestate < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_realestate > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }



     if (select_industry == 11) {

         if (avg_score_retail < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_retail > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 12) {

         if (avg_score_transportation < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_transportation > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 13) {

         if (avg_score_wholesale < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_wholesale > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }
     var h3color;
     if (benchmark_result == "Below Average") {
         h3color = "#c60";
     }

     if (benchmark_result == "Good") {
         h3color = "#f0c103";
     }

     if (benchmark_result == "Very Good") {
         h3color = "#669900";
     }

     //document.getElementById("bench_btn").style.display="none";
     //document.getElementById("bench_h3").style.display="block";
     document.getElementById("bench_h3").innerHTML = benchmark_result;
     document.getElementById("bench_h3").style.background = h3color;
 }

 function show_btn() {
     //document.getElementById("bench_btn").style.display="block";
     document.getElementById("bench_h3").style.display = "none";

 }

 function show_roimail_div() {
     document.getElementById("roimail_div").style.display = "block";
     document.getElementById("mail_btn").style.display = "none";
 }


 function roicalculation() {
     var cat_overall_outpatient_column1 = 60 / 100;
     var cat_overall_outpatient_column2 = 2.9;
     var cat_overall_hospital_column1 = 6 / 100;
     var cat_overall_hospital_column2 = 0.8;

     var total_cat_overall_outpatient_hospital_col1 = cat_overall_outpatient_column1 + cat_overall_hospital_column1;
     var total_cat_overall_outpatient_hospital_col2 = cat_overall_outpatient_column2 + cat_overall_hospital_column2;


     var cat_accomodation_outpatient_column1 = 42.1 / 100;
     var cat_accomodation_outpatient_column2 = 1.8;
     var cat_accomodation_hospital_column1 = 3 / 100;
     var cat_accomodation_hospital_column2 = 0.5;

     var total_cat_accomodation_outpatient_hospital_col1 = cat_accomodation_outpatient_column1 + cat_accomodation_hospital_column1;
     var total_cat_accomodation_outpatient_hospital_col2 = cat_accomodation_outpatient_column2 + cat_accomodation_hospital_column2;


     var cat_administrative_outpatient_column1 = 45.7 / 100;
     var cat_administrative_outpatient_column2 = 2.0;
     var cat_administrative_hospital_column1 = 4.5 / 100;
     var cat_administrative_hospital_column2 = 0.8;

     var total_cat_administrative_outpatient_hospital_col1 = cat_administrative_outpatient_column1 + cat_administrative_hospital_column1;
     var total_cat_administrative_outpatient_hospital_col2 = cat_administrative_outpatient_column2 + cat_administrative_hospital_column2;


     var cat_community_outpatient_column1 = 65.6 / 100;
     var cat_community_outpatient_column2 = 3.6;
     var cat_community_hospital_column1 = 9.4 / 100;
     var cat_community_hospital_column2 = 1.3;

     var total_cat_community_outpatient_hospital_col1 = cat_community_outpatient_column1 + cat_community_hospital_column1;
     var total_cat_community_outpatient_hospital_col2 = cat_community_outpatient_column2 + cat_community_hospital_column2;


     var cat_construction_outpatient_column1 = 43.8 / 100;
     var cat_construction_outpatient_column2 = 1.5;
     var cat_construction_hospital_column1 = 2.6 / 100;
     var cat_construction_hospital_column2 = 0.4;

     var total_cat_construction_outpatient_hospital_col1 = cat_construction_outpatient_column1 + cat_construction_hospital_column1;
     var total_cat_construction_outpatient_hospital_col2 = cat_construction_outpatient_column2 + cat_construction_hospital_column2;


     var cat_financial_outpatient_column1 = 69.6 / 100;
     var cat_financial_outpatient_column2 = 2.9;
     var cat_financial_hospital_column1 = 6.5 / 100;
     var cat_financial_hospital_column2 = 0.8;

     var total_cat_financial_outpatient_hospital_col1 = cat_financial_outpatient_column1 + cat_financial_hospital_column1;
     var total_cat_financial_outpatient_hospital_col2 = cat_financial_outpatient_column2 + cat_financial_hospital_column2;


     var cat_information_outpatient_column1 = 68.8 / 100;
     var cat_information_outpatient_column2 = 3.3;
     var cat_information_hospital_column1 = 4.5 / 100;
     var cat_information_hospital_column2 = 0.6;

     var total_cat_information_outpatient_hospital_col1 = cat_information_outpatient_column1 + cat_information_hospital_column1;
     var total_cat_information_outpatient_hospital_col2 = cat_information_outpatient_column2 + cat_information_hospital_column2;


     var cat_manufacturing_outpatient_column1 = 68.8 / 100;
     var cat_manufacturing_outpatient_column2 = 3.4;
     var cat_manufacturing_hospital_column1 = 5.5 / 100;
     var cat_manufacturing_hospital_column2 = 0.8;

     var total_cat_manufacturing_outpatient_hospital_col1 = cat_manufacturing_outpatient_column1 + cat_manufacturing_hospital_column1;
     var total_cat_manufacturing_outpatient_hospital_col2 = cat_manufacturing_outpatient_column2 + cat_manufacturing_hospital_column2;


     var cat_other_outpatient_column1 = 73.5 / 100;
     var cat_other_outpatient_column2 = 4.6;
     var cat_other_hospital_column1 = 6.7 / 100;
     var cat_other_hospital_column2 = 1.4;

     var total_cat_other_outpatient_hospital_col1 = cat_other_outpatient_column1 + cat_other_hospital_column1;
     var total_cat_other_outpatient_hospital_col2 = cat_other_outpatient_column2 + cat_other_hospital_column2;


     var cat_professional_outpatient_column1 = 67.7 / 100;
     var cat_professional_outpatient_column2 = 3.0;
     var cat_professional_hospital_column1 = 8.6 / 100;
     var cat_professional_hospital_column2 = 0.7;

     var total_cat_professional_outpatient_hospital_col1 = cat_professional_outpatient_column1 + cat_professional_hospital_column1;
     var total_cat_professional_outpatient_hospital_col2 = cat_professional_outpatient_column2 + cat_professional_hospital_column2;


     var cat_realestate_outpatient_column1 = 62.4 / 100;
     var cat_realestate_outpatient_column2 = 3.2;
     var cat_realestate_hospital_column1 = 5.1 / 100;
     var cat_realestate_hospital_column2 = 0.9;

     var total_cat_realestate_outpatient_hospital_col1 = cat_realestate_outpatient_column1 + cat_realestate_hospital_column1;
     var total_cat_realestate_outpatient_hospital_col2 = cat_realestate_outpatient_column2 + cat_realestate_hospital_column2;


     var cat_retail_outpatient_column1 = 47 / 100;
     var cat_retail_outpatient_column2 = 2.2;
     var cat_retail_hospital_column1 = 6.9 / 100;
     var cat_retail_hospital_column2 = 0.8;

     var total_cat_retail_outpatient_hospital_col1 = cat_retail_outpatient_column1 + cat_retail_hospital_column1;
     var total_cat_retail_outpatient_hospital_col2 = cat_retail_outpatient_column2 + cat_retail_hospital_column2;


     var cat_transportation_outpatient_column1 = 62.5 / 100;
     var cat_transportation_outpatient_column2 = 3.5;
     var cat_transportation_hospital_column1 = 7.3 / 100;
     var cat_transportation_hospital_column2 = 1.6;

     var total_cat_transportation_outpatient_hospital_col1 = cat_transportation_outpatient_column1 + cat_transportation_hospital_column1;
     var total_cat_transportation_outpatient_hospital_col2 = cat_transportation_outpatient_column2 + cat_transportation_hospital_column2;


     var cat_wholesale_outpatient_column1 = 63.6 / 100;
     var cat_wholesale_outpatient_column2 = 2.9;
     var cat_wholesale_hospital_column1 = 4.8 / 100;
     var cat_wholesale_hospital_column2 = 0.7;

     var total_cat_wholesale_outpatient_hospital_col1 = cat_wholesale_outpatient_column1 + cat_wholesale_hospital_column1;
     var total_cat_wholesale_outpatient_hospital_col2 = cat_wholesale_outpatient_column2 + cat_wholesale_hospital_column2;




     var select_industry = parseInt(document.getElementById("select_industry").value);
     var text_1 = parseFloat(document.getElementById("text_1").value) / 100;
     var text_2 = parseFloat(document.getElementById("text_2").value);
     var text_3 = parseFloat(document.getElementById("text_3").value) / 100;
     var text_4 = parseFloat(document.getElementById("text_4").value);

     if (text_1 <= 0 || isNaN(text_1)) {
         alert("Please enter 1a textbox value");
         return false;
     }

     if (text_2 <= 0 || isNaN(text_2)) {
         alert("Please enter 1b textbox value ");
         return false;
     }

     if (text_3 <= 0 || isNaN(text_3)) {
         alert("Please enter 2a textbox value ");
         return false;
     }

     if (text_4 <= 0 || isNaN(text_4)) {
         alert("Please enter 2b textbox value ");
         return false;
     }


     var Score_1a_accomodation = (text_1 / cat_accomodation_outpatient_column1);
     var Score_1b_accomodation = (text_2 / cat_accomodation_outpatient_column2);
     var Score_2a_accomodation = (text_3 / cat_accomodation_hospital_column1);
     var Score_2b_accomodation = (text_4 / cat_accomodation_hospital_column2);
     var avg_score_accomodation = ((Score_1a_accomodation + Score_1b_accomodation + Score_2a_accomodation + Score_2b_accomodation) / 4);

     var Score_1a_administrative = (text_1 / cat_administrative_outpatient_column1);
     var Score_1b_administrative = (text_2 / cat_administrative_outpatient_column2);
     var Score_2a_administrative = (text_3 / cat_administrative_hospital_column1);
     var Score_2b_administrative = (text_4 / cat_administrative_hospital_column2);
     var avg_score_administrative = ((Score_1a_administrative + Score_1b_administrative + Score_2a_administrative + Score_2b_administrative) / 4);



     var Score_1a_community = (text_1 / cat_community_outpatient_column1);
     var Score_1b_community = (text_2 / cat_community_outpatient_column2);
     var Score_2a_community = (text_3 / cat_community_hospital_column1);
     var Score_2b_community = (text_4 / cat_community_hospital_column2);
     var avg_score_community = ((Score_1a_community + Score_1b_community + Score_2a_community + Score_2b_community) / 4);



     var Score_1a_construction = (text_1 / cat_construction_outpatient_column1);
     var Score_1b_construction = (text_2 / cat_construction_outpatient_column2);
     var Score_2a_construction = (text_3 / cat_construction_hospital_column1);
     var Score_2b_construction = (text_4 / cat_construction_hospital_column2);
     var avg_score_construction = ((Score_1a_construction + Score_1b_construction + Score_2a_construction + Score_2b_construction) / 4);



     var Score_1a_financial = (text_1 / cat_financial_outpatient_column1);
     var Score_1b_financial = (text_2 / cat_financial_outpatient_column2);
     var Score_2a_financial = (text_3 / cat_financial_hospital_column1);
     var Score_2b_financial = (text_4 / cat_financial_hospital_column2);
     var avg_score_financial = ((Score_1a_financial + Score_1b_financial + Score_2a_financial + Score_2b_financial) / 4);


     var Score_1a_information = (text_1 / cat_information_outpatient_column1);
     var Score_1b_information = (text_2 / cat_information_outpatient_column2);
     var Score_2a_information = (text_3 / cat_information_hospital_column1);
     var Score_2b_information = (text_4 / cat_information_hospital_column2);
     var avg_score_information = ((Score_1a_information + Score_1b_information + Score_2a_information + Score_2b_information) / 4);



     var Score_1a_manufacturing = (text_1 / cat_manufacturing_outpatient_column1);
     var Score_1b_manufacturing = (text_2 / cat_manufacturing_outpatient_column2);
     var Score_2a_manufacturing = (text_3 / cat_manufacturing_hospital_column1);
     var Score_2b_manufacturing = (text_4 / cat_manufacturing_hospital_column2);
     var avg_score_manufacturing = ((Score_1a_manufacturing + Score_1b_manufacturing + Score_2a_manufacturing + Score_2b_manufacturing) / 4);


     var Score_1a_other = (text_1 / cat_other_outpatient_column1);
     var Score_1b_other = (text_2 / cat_other_outpatient_column2);
     var Score_2a_other = (text_3 / cat_other_hospital_column1);
     var Score_2b_other = (text_4 / cat_other_hospital_column2);
     var avg_score_other = ((Score_1a_other + Score_1b_other + Score_2a_other + Score_2b_other) / 4);


     var Score_1a_professional = (text_1 / cat_professional_outpatient_column1);
     var Score_1b_professional = (text_2 / cat_professional_outpatient_column2);
     var Score_2a_professional = (text_3 / cat_professional_hospital_column1);
     var Score_2b_professional = (text_4 / cat_professional_hospital_column2);
     var avg_score_professional = ((Score_1a_professional + Score_1b_professional + Score_2a_professional + Score_2b_professional) / 4);


     var Score_1a_realestate = (text_1 / cat_realestate_outpatient_column1);
     var Score_1b_realestate = (text_2 / cat_realestate_outpatient_column2);
     var Score_2a_realestate = (text_3 / cat_realestate_hospital_column1);
     var Score_2b_realestate = (text_4 / cat_realestate_hospital_column2);
     var avg_score_realestate = ((Score_1a_realestate + Score_1b_realestate + Score_2a_realestate + Score_2b_realestate) / 4);


     var Score_1a_retail = (text_1 / cat_retail_outpatient_column1);
     var Score_1b_retail = (text_2 / cat_retail_outpatient_column2);
     var Score_2a_retail = (text_3 / cat_retail_hospital_column1);
     var Score_2b_retail = (text_4 / cat_retail_hospital_column2);
     var avg_score_retail = ((Score_1a_retail + Score_1b_retail + Score_2a_retail + Score_2b_retail) / 4);


     var Score_1a_transportation = (text_1 / cat_transportation_outpatient_column1);
     var Score_1b_transportation = (text_2 / cat_transportation_outpatient_column2);
     var Score_2a_transportation = (text_3 / cat_transportation_hospital_column1);
     var Score_2b_transportation = (text_4 / cat_transportation_hospital_column2);
     var avg_score_transportation = ((Score_1a_transportation + Score_1b_transportation + Score_2a_transportation + Score_2b_transportation) / 4);


     var Score_1a_wholesale = (text_1 / cat_wholesale_outpatient_column1);
     var Score_1b_wholesale = (text_2 / cat_wholesale_outpatient_column2);
     var Score_2a_wholesale = (text_3 / cat_wholesale_hospital_column1);
     var Score_2b_wholesale = (text_4 / cat_wholesale_hospital_column2);
     var avg_score_wholesale = ((Score_1a_wholesale + Score_1b_wholesale + Score_2a_wholesale + Score_2b_wholesale) / 4);

     var benchmark_result;

     if (select_industry == 1) {

         if (avg_score_accomodation < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_accomodation > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 2) {

         if (avg_score_administrative < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_administrative > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 3) {

         if (avg_score_community < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_community > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 4) {

         if (avg_score_construction < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_construction > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 5) {

         if (avg_score_financial < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_financial > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 6) {

         if (avg_score_information < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_information > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 7) {

         if (avg_score_manufacturing < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_manufacturing > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 8) {

         if (avg_score_other < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_other > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }



     if (select_industry == 9) {

         if (avg_score_professional < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_professional > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 10) {

         if (avg_score_realestate < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_realestate > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }



     if (select_industry == 11) {

         if (avg_score_retail < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_retail > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 12) {

         if (avg_score_transportation < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_transportation > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     if (select_industry == 13) {

         if (avg_score_wholesale < 0.9) {
             benchmark_result = "Very Good";
         } else if (avg_score_wholesale > 1.1) {
             benchmark_result = "Below Average";
         } else {
             benchmark_result = "Good";
         }

         document.getElementById("text_5").value = benchmark_result;
         document.getElementById("text_6").value = benchmark_result;

     }


     var text_5 = document.getElementById("text_5").value;
     var text_6 = document.getElementById("text_6").value;

     var select_1 = parseInt(document.getElementById("selec_1").value);
     var select_2 = parseInt(document.getElementById("selec_2").value);
     var select_3 = parseInt(document.getElementById("selec_3").value);
     //alert(text_6);
     var text_7 = parseFloat(document.getElementById("text_7").value);
     var text_8 = parseFloat(document.getElementById("text_8").value);
     var text_9 = parseFloat(document.getElementById("text_9").value);
     var text_10 = parseFloat(document.getElementById("text_10").value);
     var text_11 = parseFloat(document.getElementById("text_11").value);
     var text_12 = parseFloat(document.getElementById("text_12").value);
     var text_13 = parseFloat(document.getElementById("text_13").value);
     var text_14 = parseFloat(document.getElementById("text_14").value);
     var text_15 = parseFloat(document.getElementById("text_15").value);
     var text_16 = parseFloat(document.getElementById("text_16").value);
     var text_17 = parseFloat(document.getElementById("text_17").value);
     var text_18 = parseFloat(document.getElementById("text_18").value);
     var text_19 = parseFloat(document.getElementById("text_19").value);
     var text_20 = parseFloat(document.getElementById("text_20").value);
     var text_21 = parseFloat(document.getElementById("text_21").value);
     var text_22 = parseFloat(document.getElementById("text_22").value);
     var text_23 = parseFloat(document.getElementById("text_23").value);
     var text_24 = parseFloat(document.getElementById("text_24").value);
     var text_25 = parseFloat(document.getElementById("text_25").value);
     var text_26 = parseFloat(document.getElementById("text_26").value);
     var text_27 = parseFloat(document.getElementById("text_27").value);
     var text_28 = parseFloat(document.getElementById("text_28").value);
     var text_29 = parseFloat(document.getElementById("text_29").value);
     var text_30 = parseFloat(document.getElementById("text_30").value);
     var text_31 = parseFloat(document.getElementById("text_31").value);
     var text_32 = parseFloat(document.getElementById("text_32").value);
     var text_33 = parseFloat(document.getElementById("text_33").value);
     var text_34 = parseFloat(document.getElementById("text_34").value);
     var text_35 = parseFloat(document.getElementById("text_35").value);
     var text_36 = parseFloat(document.getElementById("text_36").value);
     var text_37 = parseFloat(document.getElementById("text_37").value);
     var text_38 = parseFloat(document.getElementById("text_38").value);
     var text_39 = parseFloat(document.getElementById("text_39").value);
     var text_40 = parseFloat(document.getElementById("text_40").value);
     var text_41 = parseFloat(document.getElementById("text_41").value);
     var text_42 = parseFloat(document.getElementById("text_42").value);

     var text_43 = parseFloat(document.getElementById("text_43").value) / 100;
     var text_44 = parseFloat(document.getElementById("text_44").value) / 100;
     var text_45 = parseFloat(document.getElementById("text_45").value) / 100;
     var text_46 = parseFloat(document.getElementById("text_46").value) / 100;

     if ((text_7 <= 0) || (text_8 <= 0) || (text_9 <= 0) || (text_10 <= 0) || isNaN(text_7) || isNaN(text_8) || isNaN(text_9) || isNaN(text_10)) {
         alert("Please enter all textbox value for Number of Full Time Employees (FTE)");
         return false;
     }


     if ((text_11 <= 0) || (text_12 <= 0) || (text_13 <= 0) || (text_14 <= 0) || isNaN(text_11) || isNaN(text_12) || isNaN(text_13) || isNaN(text_14)) {
         alert("Please enter all textbox value for Average annual salary per FTE");
         return false;
     }


     if ((text_15 <= 0) || (text_16 <= 0) || (text_17 <= 0) || (text_18 <= 0) || isNaN(text_15) || isNaN(text_16) || isNaN(text_17) || isNaN(text_18)) {
         alert("Please enter all textbox value for Working days per year");
         return false;
     }


     if (isNaN(text_19) || isNaN(text_20) || isNaN(text_21) || isNaN(text_22)) {
         alert("Please enter all textbox value for Average annual medical insurance spend per employee");
         return false;
     }


     if ((text_23 <= 0) || (text_24 <= 0) || (text_25 <= 0) || (text_26 <= 0) || isNaN(text_23) || isNaN(text_24) || isNaN(text_25) || isNaN(text_26)) {
         alert("Please enter all textbox value for Average annual other health / medical benefits spend per employee");
         return false;
     }

     var result1 = text_31 * text_11 / text_15;
     console.log('result1 text_31 * text_11 / text_15', text_31, text_11, text_15, result1)
     document.getElementById("result1").value = result1.toFixed(0);


     var result2 = text_32 * text_12 / text_16;
     document.getElementById("result2").value = result2.toFixed(0);


     var result3 = text_33 * text_13 / text_17;
     document.getElementById("result3").value = result3.toFixed(0);


     var result4 = text_34 * text_14 / text_18;
     document.getElementById("result4").value = result4.toFixed(0);

     var result5 = text_27 * text_7;
     document.getElementById("result5").value = result5.toFixed(0);

     var result6 = text_28 * text_8;
     document.getElementById("result6").value = result6.toFixed(0);

     var result7 = text_29 * text_9;
     document.getElementById("result7").value = result7.toFixed(0);


     var result8 = text_30 * text_10;
     document.getElementById("result8").value = result8.toFixed(0);

     var result9 = text_35;
     document.getElementById("result9").value = result9.toFixed(0);

     var result10 = text_36;
     document.getElementById("result10").value = result10.toFixed(0);

     var result11 = text_37;
     document.getElementById("result11").value = result11.toFixed(0);

     var result12 = text_38;
     document.getElementById("result12").value = result12.toFixed(0);

     var result13 = text_39;
     document.getElementById("result13").value = result13.toFixed(0);

     var result14 = text_40;
     document.getElementById("result14").value = result14.toFixed(0);

     var result15 = text_41;
     document.getElementById("result15").value = result15.toFixed(0);

     var result16 = text_42;
     document.getElementById("result16").value = result16.toFixed(0);

     var costof_lost_productivity;

     if (text_6 == "Below Average") {

         costof_lost_productivity = 13.1 * text_7 * text_11 * (text_43 / text_15);

     } else if (text_6 == "Good") {

         costof_lost_productivity = 11.1 * text_7 * text_11 * (text_43 / text_15);

     } else if (text_6 == "Very Good") {

         costof_lost_productivity = 10.2 * text_7 * text_11 * (text_43 / text_15);

     } else {
         costof_lost_productivity = "Error";
     }


     document.getElementById("result17").value = costof_lost_productivity.toFixed(0);


     var costof_lost_productivity_yr_2;

     if (select_1 == 1) {

         costof_lost_productivity_yr_2 = 13.1 * text_8 * text_12 * (text_44 / text_16);

     } else if (select_1 == 2) {

         costof_lost_productivity_yr_2 = 11.1 * text_8 * text_12 * (text_44 / text_16);

     } else if (select_1 == 3) {

         costof_lost_productivity_yr_2 = 10.2 * text_8 * text_12 * (text_44 / text_16);

     } else {

         costof_lost_productivity_yr_2 = "Error";

     }

     document.getElementById("result18").value = costof_lost_productivity_yr_2.toFixed(0);

     var costof_lost_productivity_yr_3;

     if (select_2 == 1) {

         costof_lost_productivity_yr_3 = 13.1 * text_9 * text_13 * (text_45 / text_17);

     } else if (select_2 == 2) {

         costof_lost_productivity_yr_3 = 11.1 * text_9 * text_13 * (text_45 / text_17);

     } else if (select_2 == 3) {

         costof_lost_productivity_yr_3 = 10.2 * text_9 * text_13 * (text_45 / text_17);

     } else {

         costof_lost_productivity_yr_3 = "Error";

     }

     document.getElementById("result19").value = costof_lost_productivity_yr_3.toFixed(0);

     var costof_lost_productivity_yr_4;

     if (select_3 == 1) {

         costof_lost_productivity_yr_4 = 13.1 * text_10 * text_14 * (text_46 / text_18);

     } else if (select_3 == 2) {

         costof_lost_productivity_yr_4 = 11.1 * text_10 * text_14 * (text_46 / text_18);

     } else if (select_3 == 3) {

         costof_lost_productivity_yr_4 = 10.2 * text_10 * text_14 * (text_46 / text_18);

     } else {

         costof_lost_productivity_yr_4 = "Error";

     }

     document.getElementById("result20").value = costof_lost_productivity_yr_4.toFixed(0);

     var costof_emp_disengagement_yr_1;

     if (text_6 == "Below Average") {

         costof_emp_disengagement_yr_1 = (41 / 100) * text_43 * text_11 * text_7;

     } else if (text_6 == "Good") {

         costof_emp_disengagement_yr_1 = (25 / 100) * text_43 * text_11 * text_7;

     } else if (text_6 == "Very Good") {

         costof_emp_disengagement_yr_1 = (16 / 100) * text_43 * text_11 * text_7;

     } else {

         costof_emp_disengagement_yr_1 = "Error";

     }

     document.getElementById("result21").value = costof_emp_disengagement_yr_1.toFixed(0);

     var costof_emp_disengagement_yr_2;

     if (select_1 == 1) {

         costof_emp_disengagement_yr_2 = (41 / 100) * text_44 * text_12 * text_8;

     } else if (select_1 == 2) {

         costof_emp_disengagement_yr_2 = (25 / 100) * text_44 * text_12 * text_8;

     } else if (select_1 == 3) {

         costof_emp_disengagement_yr_2 = (16 / 100) * text_44 * text_12 * text_8;

     } else {

         costof_emp_disengagement_yr_2 = "Error";

     }

     document.getElementById("result22").value = costof_emp_disengagement_yr_2.toFixed(0);

     var costof_emp_disengagement_yr_3;

     if (select_2 == 1) {

         costof_emp_disengagement_yr_3 = (41 / 100) * text_45 * text_13 * text_9;

     } else if (select_2 == 2) {

         costof_emp_disengagement_yr_3 = (25 / 100) * text_45 * text_13 * text_9;

     } else if (select_2 == 3) {

         costof_emp_disengagement_yr_3 = (16 / 100) * text_45 * text_13 * text_9;

     } else {

         costof_emp_disengagement_yr_3 = "Error";

     }

     document.getElementById("result23").value = costof_emp_disengagement_yr_3.toFixed(0);

     var costof_emp_disengagement_yr_4;

     if (select_3 == 1) {

         costof_emp_disengagement_yr_4 = (41 / 100) * text_46 * text_14 * text_10;

     } else if (select_3 == 2) {

         costof_emp_disengagement_yr_4 = (25 / 100) * text_46 * text_14 * text_10;

     } else if (select_3 == 3) {

         costof_emp_disengagement_yr_4 = (16 / 100) * text_46 * text_14 * text_10;

     } else {

         costof_emp_disengagement_yr_4 = "Error";

     }

     document.getElementById("result24").value = costof_emp_disengagement_yr_4.toFixed(0);

     var medical_insurance_cost_yr_1;

     medical_insurance_cost_yr_1 = -1 * text_19 * text_7;

     document.getElementById("result25").value = medical_insurance_cost_yr_1.toFixed(0);

     var medical_insurance_cost_yr_2;

     medical_insurance_cost_yr_2 = -1 * text_20 * text_8;

     document.getElementById("result26").value = medical_insurance_cost_yr_2.toFixed(0);

     var medical_insurance_cost_yr_3;

     medical_insurance_cost_yr_3 = -1 * text_21 * text_9;

     document.getElementById("result27").value = medical_insurance_cost_yr_3.toFixed(0);


     var medical_insurance_cost_yr_4;

     medical_insurance_cost_yr_4 = -1 * text_22 * text_10;

     document.getElementById("result28").value = medical_insurance_cost_yr_4.toFixed(0);

     var other_medical_cost_yr_1;

     other_medical_cost_yr_1 = -1 * text_7 * text_23;

     document.getElementById("result29").value = other_medical_cost_yr_1.toFixed(0);

     var other_medical_cost_yr_2;

     other_medical_cost_yr_2 = -1 * text_8 * text_24;

     document.getElementById("result30").value = other_medical_cost_yr_2.toFixed(0);

     var other_medical_cost_yr_3;

     other_medical_cost_yr_3 = -1 * text_9 * text_25;

     document.getElementById("result31").value = other_medical_cost_yr_3.toFixed(0);

     var other_medical_cost_yr_4;

     other_medical_cost_yr_4 = -1 * text_10 * text_26;

     document.getElementById("result32").value = other_medical_cost_yr_4.toFixed(0);

     var all_yr_1 = result1 + result5 + result9 + result13 + costof_lost_productivity + costof_emp_disengagement_yr_1;
     var all_yr_2 = result2 + result6 + result10 + result14 + costof_lost_productivity_yr_2 + costof_emp_disengagement_yr_2;
     var all_yr_3 = result3 + result7 + result11 + result15 + costof_lost_productivity_yr_3 + costof_emp_disengagement_yr_3;
     var all_yr_4 = result4 + result8 + result12 + result16 + costof_lost_productivity_yr_4 + costof_emp_disengagement_yr_4;

     var discrete_annual_roi_yr2_1stpart = ((all_yr_1 / text_7) - (all_yr_2 / text_8));
     var discrete_annual_roi_yr2_2ndpart = text_8 / ((Math.abs(medical_insurance_cost_yr_2) + Math.abs(other_medical_cost_yr_2)) - (Math.abs(medical_insurance_cost_yr_1) + Math.abs(other_medical_cost_yr_1)));
     var discrete_annual_roi_yr2 = discrete_annual_roi_yr2_1stpart * discrete_annual_roi_yr2_2ndpart;
     document.getElementById("result33").value = discrete_annual_roi_yr2.toFixed(2);

     var discrete_annual_roi_yr3_1stpart = ((all_yr_2 / text_8) - (all_yr_3 / text_9));
     var discrete_annual_roi_yr3_2ndpart = text_9 / ((Math.abs(medical_insurance_cost_yr_3) + Math.abs(other_medical_cost_yr_3)) - (Math.abs(medical_insurance_cost_yr_2) + Math.abs(other_medical_cost_yr_2)));
     var discrete_annual_roi_yr3 = discrete_annual_roi_yr3_1stpart * discrete_annual_roi_yr3_2ndpart;
     document.getElementById("result34").value = discrete_annual_roi_yr3.toFixed(2);

     var discrete_annual_roi_yr4_1stpart = ((all_yr_3 / text_9) - (all_yr_4 / text_10));
     var discrete_annual_roi_yr4_2ndpart = text_10 / ((Math.abs(medical_insurance_cost_yr_4) + Math.abs(other_medical_cost_yr_4)) - (Math.abs(medical_insurance_cost_yr_3) + Math.abs(other_medical_cost_yr_3)));
     var discrete_annual_roi_yr4 = discrete_annual_roi_yr4_1stpart * discrete_annual_roi_yr4_2ndpart;
     document.getElementById("result35").value = discrete_annual_roi_yr4.toFixed(2);


     var cumulative_roi_yr2_1stpart = ((all_yr_1 / text_7) - (all_yr_2 / text_8));
     var cumulative_roi_yr2_2ndpart = text_8 / ((Math.abs(medical_insurance_cost_yr_2) + Math.abs(other_medical_cost_yr_2)) - (Math.abs(medical_insurance_cost_yr_1) + Math.abs(other_medical_cost_yr_1)));
     var cumulative_roi_yr2 = cumulative_roi_yr2_1stpart * cumulative_roi_yr2_2ndpart;
     document.getElementById("result36").value = cumulative_roi_yr2.toFixed(2);

     var cumulative_roi_yr3_1stpart = ((all_yr_1 / text_7) - (all_yr_3 / text_9));
     var cumulative_roi_yr3_2ndpart = text_9 / ((Math.abs(medical_insurance_cost_yr_3) + Math.abs(other_medical_cost_yr_3)) - (Math.abs(medical_insurance_cost_yr_1) + Math.abs(other_medical_cost_yr_1)));
     var cumulative_roi_yr3 = cumulative_roi_yr3_1stpart * cumulative_roi_yr3_2ndpart;
     document.getElementById("result37").value = cumulative_roi_yr3.toFixed(2);

     var cumulative_roi_yr4_1stpart = ((all_yr_1 / text_7) - (all_yr_4 / text_10));
     var cumulative_roi_yr4_2ndpart = text_10 / ((Math.abs(medical_insurance_cost_yr_4) + Math.abs(other_medical_cost_yr_4)) - (Math.abs(medical_insurance_cost_yr_1) + Math.abs(other_medical_cost_yr_1)));
     var cumulative_roi_yr4 = cumulative_roi_yr4_1stpart * cumulative_roi_yr4_2ndpart;
     document.getElementById("result38").value = cumulative_roi_yr4.toFixed(2);


     // line chart start from here

     function drawChart() {
         console.log('drawChart:');
         // Define the chart to be drawn.
         var data = new google.visualization.DataTable();
         data.addColumn('string', 'Year');
         data.addColumn('number', 'Discrete ROI');
         data.addColumn('number', 'Cumulative ROI');

         data.addRows([
             ['Year 1', null, null],
             ['Year 2', discrete_annual_roi_yr2, cumulative_roi_yr2],
             ['Year 3', discrete_annual_roi_yr3, cumulative_roi_yr3],
             ['Year 4', discrete_annual_roi_yr4, cumulative_roi_yr4]
         ]);

         // Set chart options
         var options = {
             'title': 'ROI',
             'height': 500,
             hAxis: {
                 title: 'Year'
             },
             vAxis: {
                 title: 'Amount'
             }
         };

         // Instantiate and draw the chart.
         //var chart = new google.visualization.LineChart(document.getElementById('container1'));
         //chart.draw(data, options);

         var result1_f = parseFloat(document.getElementById("result1").value);
         var result2_f = parseFloat(document.getElementById("result2").value);
         var result3_f = parseFloat(document.getElementById("result3").value);
         var result4_f = parseFloat(document.getElementById("result4").value);

         var result5_f = parseFloat(document.getElementById("result5").value);
         var result6_f = parseFloat(document.getElementById("result6").value);
         var result7_f = parseFloat(document.getElementById("result7").value);
         var result8_f = parseFloat(document.getElementById("result8").value);

         var result9_f = parseFloat(document.getElementById("result9").value);
         var result10_f = parseFloat(document.getElementById("result10").value);
         var result11_f = parseFloat(document.getElementById("result11").value);
         var result12_f = parseFloat(document.getElementById("result12").value);

         var result13_f = parseFloat(document.getElementById("result13").value);
         var result14_f = parseFloat(document.getElementById("result14").value);
         var result15_f = parseFloat(document.getElementById("result15").value);
         var result16_f = parseFloat(document.getElementById("result16").value);

         var result17_f = parseFloat(document.getElementById("result17").value);
         var result18_f = parseFloat(document.getElementById("result18").value);
         var result19_f = parseFloat(document.getElementById("result19").value);
         var result20_f = parseFloat(document.getElementById("result20").value);

         var result21_f = parseFloat(document.getElementById("result21").value);
         var result22_f = parseFloat(document.getElementById("result22").value);
         var result23_f = parseFloat(document.getElementById("result23").value);
         var result24_f = parseFloat(document.getElementById("result24").value);

         var result25_f = parseFloat(document.getElementById("result25").value);
         var result26_f = parseFloat(document.getElementById("result26").value);
         var result27_f = parseFloat(document.getElementById("result27").value);
         var result28_f = parseFloat(document.getElementById("result28").value);


         var result29_f = parseFloat(document.getElementById("result29").value);
         var result30_f = parseFloat(document.getElementById("result30").value);
         var result31_f = parseFloat(document.getElementById("result31").value);
         var result32_f = parseFloat(document.getElementById("result32").value);












         var data1 = google.visualization.arrayToDataTable([
             ['Year', 'Cost of absenteeism', 'Cost of Medical Claims', 'Overtime Cost', 'Cost of Recruitment', 'Cost of Lost Productivity', 'Cost of Employee Disengagement', 'Medical Insurance Costs', 'Other Health Cost'],
             ['Year 1', result1_f, result5_f, result9_f, result13_f, result17_f, result21_f, result25_f, result29_f],
             ['Year 2', result2_f, result6_f, result10_f, result14_f, result18_f, result22_f, result26_f, result30_f],
             ['Year 3', result3_f, result7_f, result11_f, result15_f, result19_f, result23_f, result27_f, result31_f],
             ['Year 4', result4_f, result8_f, result12_f, result16_f, result20_f, result24_f, result28_f, result32_f]
         ]);



         var options1 = {
             title: 'Individual Cost Items (Investments in Benefits Shown as Negative)',
             'height': 500


         };

         // Instantiate and draw the chart.
         //var chart1 = new google.visualization.ColumnChart(document.getElementById('container2'));

         //chart1.draw(data1, options1);


         $("body").on("click", ".fn_graphics__item__hover1", function() {
             var chart_02 = new google.visualization.LineChart(document.getElementById('container3'));
             chart_02.draw(data, options);
         });

         $("body").on("click", ".fn_graphics__item__hover2", function() {
             var chart2 = new google.visualization.ColumnChart(document.getElementById('container4'));
             chart2.draw(data1, options1);
         });


     }
     google.charts.setOnLoadCallback(drawChart);


 }