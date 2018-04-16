$(window).on("load", sidenvises);

function sidenvises() {

 $("#munchie_container").addClass("munchie_position_start");

 $("#mand_container").addClass("mand_position_start");

 $("#chicken_container").addClass("chicken_position_start");

 $("#valg_1_stjaelmaden").addClass("valg1_usynlig");
 $("#valg_1_stjaelmaden_ja").addClass("valg1_usynlig");
 $("#valg_1_stjaelmaden_nej").addClass("valg1_usynlig");

$("#start").on("click", munchie_moves_in);
}

function munchie_moves_in() {
    console.log("movein");

        $("#munchie_container").removeClass("munchie_position_start");
        $("#munchie_container").removeClass("munchie_position_in");

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

        $("#munchie_container").removeClass("munchie_moves_in");
        $("#munchie_sprite").removeClass("munchie_walkcycle");
        $("#mand_container").removeClass("mand_position_start");
        $("#mand_sprite").removeClass("mand_puster");

        $("#munchie_container").addClass("munchie_position_in");
        $("#munchie_sprite").addClass("munchie_gaber");
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

     $("#mand_container").addClass("mand_position_in");
     $("#mand_sprite").addClass("mand_puster");
     $("#valg_1_stjaelmaden").addClass("valg1_synlig");
     $("#valg_1_stjaelmaden_ja").addClass("valg1_synlig");
     $("#valg_1_stjaelmaden_nej").addClass("valg1_synlig");

$("#valg_1_stjaelmaden_ja").on("click", munchie_snige_in);

}

function munchie_snige_in(){
    console.log("munchie_snige_in");

    $("#valg_1_stjaelmaden_nej").off("animationend", munchie_snige_in);

        $("#valg_1_stjaelmaden").removeClass("valg1_synlig");
        $("#valg_1_stjaelmaden_ja").removeClass("valg1_synlig");
        $("#valg_1_stjaelmaden_nej").removeClass("valg1_synlig");
        $("#munchie_container").removeClass("munchie_position_in");
        $("#munchie_sprite").removeClass("munchie_gaber");
        $("#mand_sprite").removeClass("mand_puster");

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

}
