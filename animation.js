$(window).on("load", begynd);

function begynd() {

$("#munchie_container").addClass("munchie_position_start");

$("#mand_container").addClass("mand_position_start");

$("#chicken_container").addClass("chicken_position_start");

$("#start").on("click", munchie_moves_in);

$("#trin2").on("click", munchie_position_in);

$("#trin3").on("click", munchie_snige_in);

$("#trin4").on("click", munchie_samler_op);

$("#trin5").on("click", munchie_snige_out);

$("#trin6").on("click", munchie_spiser);
}

function munchie_moves_in() {
    console.log("movein");
        $("#munchie_container").removeClass("munchie_position_start");
        $("#munchie_container").removeClass("munchie_position_in");


        $("#munchie_container").addClass("munchie_moves_in");
        $("#munchie_sprite").addClass("munchie_walkcycle");

        $("#chicken_sprite").addClass("chicken_spiser");

        $("#mand_sprite").addClass("mand_puster");

}

function munchie_position_in() {
     console.log("munchie_position_in");
        $("#munchie_container").removeClass("munchie_moves_in");
        $("#munchie_sprite").removeClass("munchie_walkcycle");
        $("#mand_container").removeClass("mand_position_start");
        $("#mand_sprite").removeClass("mand_puster");

        $("#munchie_container").addClass("munchie_position_in");
        $("#munchie_sprite").addClass("munchie_gaber");
        $("#mand_container").addClass("mand_move_in");
        $("#mand_sprite").addClass("mand_walkcycle");
}

function munchie_snige_in(){
    console.log("munchie_snige_in");
        $("#munchie_container").removeClass("munchie_position_in");
        $("#munchie_sprite").removeClass("munchie_gaber");
        $("#mand_container").removeClass("mand_move_in");
        $("#mand_sprite").removeClass("mand_walkcycle");

        $("#munchie_container").addClass("munchie_snige_in");
        $("#munchie_sprite").addClass("munchie-snige_walkcycle");
        $("#mand_container").addClass("mand_position_in");
        $("#mand_sprite").addClass("mand_flexer");
}

function munchie_samler_op(){
    console.log("munchie_samler_op");
    $("#munchie_container").removeClass("munchie_snige_in");
    $("#munchie_sprite").removeClass("munchie-snige_walkcycle");



}

function munchie_snige_out(){
    console.log("munchie_snige_out");
    $("#munchie_container").addClass("munchie_snige_out");
    $("#munchie_sprite").addClass("munchie-snige_walkcycle");
}

function munchie_spiser(){
    console.log("munchie_spiser");;

}
