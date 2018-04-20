var antalklik = 0;

$(window).on("load", sidenvises);

function sidenvises() {

 $("#munchie_container").addClass("munchie_position_start");

 $("#mand_container").addClass("mand_position_start");

 $("#chicken_container").addClass("chicken_position_start");

 $("#valg_1_stjaelmaden").addClass("valg1_usynlig");
 $("#valg_1_stjaelmaden_ja").addClass("valg1_usynlig");
 $("#valg_1_stjaelmaden_nej").addClass("valg1_usynlig");

$("#forrest-01")[0].play();

$("#forrest-01").animate({volume:0.8}, 3000);

$("#start").on("click", munchie_moves_in);
}

function munchie_moves_in() {
    console.log("movein");

        $("#munchie_container").removeClass("munchie_position_start");
        $("#munchie_container").removeClass("munchie_position_in");

        $("#food_lyd")[0].play();

        $("#food_boble").show();

        $("#valg_1_stjaelmaden").addClass("valg1_usynlig");
        $("#valg_1_stjaelmaden_ja").addClass("valg1_usynlig");
        $("#valg_1_stjaelmaden_nej").addClass("valg1_usynlig");


        $("#munchie_container").addClass("munchie_moves_in");
        $("#munchie_sprite").addClass("munchie_walkcycle");

        $("#chicken_sprite").addClass("chicken_spiser");

        $("#mand_sprite").addClass("mand_puster");

    $("#munchie_container").on("animationend", munchie_position_in);

}

function munchie_position_in() {
     console.log("munchie_position_in");

    $("#munchie_container").off("animationend", munchie_position_in);

        $("#food_boble").hide();
        $("#munchie_container").removeClass("munchie_moves_in");
        $("#munchie_sprite").removeClass("munchie_walkcycle");
        $("#mand_container").removeClass("mand_position_start");
        $("#mand_sprite").removeClass("mand_puster");


        $("#munchie_container").addClass("munchie_position_in");
        $("#mand_container").addClass("mand_move_in");
        $("#mand_sprite").addClass("mand_walkcycle");

    $("#mand_container").on("animationend", munchie_valg);
}

function munchie_valg(){
    console.log("munchie_valg");

    $("#mand_container").off("animationend", munchie_valg);

     $("#valg_1_stjaelmaden").removeClass("valg1_usynlig");
     $("#valg_1_stjaelmaden_ja").removeClass("valg1_usynlig");
     $("#valg_1_stjaelmaden_nej").removeClass("valg1_usynlig");
     $("#mand_container").removeClass("mand_move_in");
     $("#mand_sprite").removeClass("mand_walkcycle");

    $("#mand_lyd")[0].play();
    $("#snige_lyd")[0].play();
    $("#snige_lyd")[0].volume = 0.5;

    $("#notforyou_boble").show();

     $("#mand_container").addClass("mand_position_in");
     $("#mand_sprite").addClass("mand_puster");
     $("#valg_1_stjaelmaden").addClass("valg1_synlig");
     $("#valg_1_stjaelmaden_ja").addClass("valg1_synlig");
     $("#valg_1_stjaelmaden_nej").addClass("valg1_synlig");

$("#valg_1_stjaelmaden_ja").on("click", munchie_snige_in);
$("#valg_1_stjaelmaden_nej").on("click", munchie_graeder);

}

function munchie_snige_in(){
    console.log("munchie_snige_in");

    $("#valg_1_stjaelmaden_nej").off("animationend", munchie_snige_in);

        $("#notforyou_boble").hide();
        $("#valg_1_stjaelmaden").removeClass("valg1_synlig");
        $("#valg_1_stjaelmaden_ja").removeClass("valg1_synlig");
        $("#valg_1_stjaelmaden_nej").removeClass("valg1_synlig");
        $("#munchie_container").removeClass("munchie_position_in");
        $("#munchie_sprite").removeClass("munchie_gaber");
        $("#mand_sprite").removeClass("mand_puster");


        $("#chicken_lyd2")[0].play();
        $("#chicken_lyd2")[0].volume = 0.5;

        $("#scene").addClass("scene_flash");
        $("#valg_1_stjaelmaden").addClass("valg1_usynlig");
        $("#valg_1_stjaelmaden_ja").addClass("valg1_usynlig");
        $("#valg_1_stjaelmaden_nej").addClass("valg1_usynlig");

        $("#munchie_container").addClass("munchie_snige_in");
        $("#munchie_sprite").addClass("munchie-snige_walkcycle");
        $("#mand_sprite").addClass("mand_flexer");

    $("#munchie_container").on("animationend", munchie_samler_op);
}

function munchie_samler_op(){
    console.log("munchie_samler_op");

    $("#munchie_container").off("animationend", munchie_samler_op);

    $("#munchie_container").removeClass("munchie_snige_in");
    $("#munchie_sprite").removeClass("munchie-snige_walkcycle");

    $("#chicken_lyd")[0].play();
    $("#chicken_lyd")[0].volume = 0.3;

    $("#madkurv_2").addClass("madkurv_position_up");
    $("#munchie_container").addClass("munchie_position_snige");

    setTimeout(munchie_snige_out, 300);
}

function munchie_snige_out(){
    console.log("munchie_snige_out");

    $("#munchie_container").off("animationend", munchie_snige_out);

    $("#madkurv_2").addClass("madkurv_position_up");

    $("#munchie_container").addClass("munchie_snige_out");
    $("#munchie_sprite").addClass("munchie-snige_walkcycle");
    $("#madkurv_2").addClass("madkurv_tag");

    $("#madkurv_2").on("animationend", munchie_spiser);
}

function munchie_spiser(){
    console.log("munchie_spiser");


    $("#madkurv_2").off("animationend", munchie_spiser);

    $("#munchie_container").removeClass("munchie_position_snige");
    $("#madkurv_2").removeClass("madkurv_position_up");
    $("#snige_lyd")[0].pause();
    $("#mand_sprite").removeClass("mand_flexer");
    $("#munchie_container").removeClass("munchie_snige_out");
    $("#munchie_sprite").removeClass("munchie-snige_walkcycle");
    $("#madkurv_2").removeClass("madkurv_tag");

    $("#madkurv_2").addClass("madkurv_position_in");
    $("#munchie_container").addClass("munchie_position_slut");
    $("#munchie_sprite").addClass("munchie_gaber");
    $("#mand_sprite").addClass("mand_gaber");

    $("#you_win").show();

    $("#happy_lyd")[0].play();
    $("#happy_lyd")[0].volume = 0.2;
}

function munchie_graeder() {
    console.log("munchie_graeder");

    $("#valg_1_stjaelmaden_nej").off("click", munchie_graeder);

        $("#notforyou_boble").hide();
        $("#ihaveanidea_boble").hide();
        $("#mand_sprite").removeClass("mand_puster");
        $("#munchie_sprite").removeClass("munchie_gaber");
        $("#valg_1_stjaelmaden").removeClass("valg1_synlig");
        $("#valg_1_stjaelmaden_ja").removeClass("valg1_synlig");
        $("#valg_1_stjaelmaden_nej").removeClass("valg1_synlig");

        $("#scene").addClass("scene_flash");
        $("#valg_1_stjaelmaden").addClass("valg1_usynlig");
        $("#valg_1_stjaelmaden_ja").addClass("valg1_usynlig");
        $("#valg_1_stjaelmaden_nej").addClass("valg1_usynlig");
        $("#mand_sprite").addClass("mand_gaber");
        $("#munchie_sprite").addClass("munchie_blinker");

        $("#sad_lyd")[0].volume = 0.2;
        $("#sad_lyd")[0].play();
        $("#munchie_graeder_lyd")[0].play();


  setTimeout(mand_valg, 5000);
}

function mand_valg() {
    console.log("mand_valg");
    $("#sad_lyd")[0].pause();
    $("#mand_sprite").removeClass("mand_gaber");

    $("#valg_random").show();

    $("#mand_sprite").addClass("mand_flexer2");
    $("#ihaveidea_lyd")[0].play();
    $("#ihaveanidea_boble").show();
//    I HAVE IDEA del

    $("#valg_random").on("click", randomValg);
}

function randomValg() {
    console.log("Random valg");
    $("#valg_random").off("click", randomValg);

    if (Math.random() >= 0.5) {
        kylling_jagt();
    } else {
        munchie_lose();
    }
}

function kylling_jagt() {
    console.log("Jagt kyllingen tæller del");
    $("#munchie_graeder_lyd")[0].pause();
    $("#ihaveanidea_boble").hide();
    $("#valg_random").hide();
}

function munchie_lose() {
    console.log("You lose!");

    $("#ihaveanidea_boble").hide();
    $("#valg_random").hide();
    $("#snige_lyd")[0].pause();

    $("#game_over").show();

    $("#sad_lyd")[0].currentTime = 1;
    $("#sad_lyd")[0].volume = 0.2;
    $("#sad_lyd")[0].play();
    $("#munchie_graeder_lyd")[0].play();

}
