/**
 * Created by ryan on 18/05/17.
 */
$(function() {


    var BASE_URL = location.origin;

    // todo load this from file rather than this monstrosity
    // this is the backup queue in case we have no more songs.

    var currentIndex = 0;
    var BACKUP_PLAYLIST = shuffleArray([
            {
                "id": "uq-gYOrU8bA",
                "title": "Paul Simon - You Can Call Me Al"
            },
            {
                "id": "XfR9iY5y94s",
                "title": "Men At Work - Down Under"
            },
            {
                "id": "pIgZ7gMze7A",
                "title": "Wham! - Wake Me Up Before You Go-Go"
            },
            {
                "id": "4H5I6y1Qvz0",
                "title": "Scissor Sisters - I Don't Feel Like Dancin'"
            },
            {
                "id": "F90Cw4l-8NY",
                "title": "Bastille - Pompeii"
            },
            {
                "id": "DohRa9lsx0Q",
                "title": "Stuck In The Middle With You - Stealers Wheel"
            },
            {
                "id": "QtMWhJHZuts",
                "title": "Bracia Figo Fagot - Disco Polo Dalej Gra (ver 2016)"
            },
            {
                "id": "qDRORgoZxZU",
                "title": "Meghan Trainor - Me Too"
            },
            {
                "id": "uFmzhki2b70",
                "title": "SANIC UNLEASHED"
            },
            {
                "id": "eVrYbKBrI7o",
                "title": "SKULL TRUMPET"
            },
            {
                "id": "vtPk5IUbdH0",
                "title": "Eddy Grant - Electric Avenue"
            },
            {
                "id": "5JxgDJvqGmM",
                "title": "Mike Perry - The Ocean ft. Shy Martin"
            },
            {
                "id": "nYh-n7EOtMA",
                "title": "Sia - Cheap Thrills (Lyric Video) ft. Sean Paul"
            },
            {
                "id": "Gs069dndIYk",
                "title": "Earth, Wind & Fire - September"
            },
            {
                "id": "GKSRyLdjsPA",
                "title": "Sia - The Greatest"
            },
            {
                "id": "SxEINSBsbeo",
                "title": "Rizzle Kicks - Mama Do The Hump Official Video"
            },
            {
                "id": "FTQbiNvZqaY",
                "title": "Toto - Africa"
            },
            {
                "id": "uPudE8nDog0",
                "title": "The Human League - Don't You Want Me"
            },
            {
                "id": "xRb4xqFpOvY",
                "title": "Steps - Scared Of The Dark (Official Video)"
            },
            {
                "id": "UaYHRx9-v2M",
                "title": "Diana Ross - Chain Reaction"
            },
            {
                "id": "jn40gqhxoSY",
                "title": "Cheat Codes - No Promises ft. Demi Lovato [Official Video]"
            },
            {
                "id": "1Al-nuR1iAU",
                "title": "Rag'n'Bone Man - Skin (Official Video)"
            },
            {
                "id": "eAI1Onf2-Co",
                "title": "Busted - What I Go To School For"
            },
            {
                "id": "Tu7HoGZaspo",
                "title": "Busted - Year 3000"
            },
            {
                "id": "ALvep1RsGQ0",
                "title": "TIEKS - Sunshine feat. Dan Harkna (Official Video)"
            },
            {
                "id": "dQw4w9WgXcQ",
                "title": "Rick Astley - Never Gonna Give You Up"
            },
            {
                "id": "YR5ApYxkU-U",
                "title": "Pink Floyd - Another Brick In The Wall (HQ)"
            },
            {
                "id": "0mYBSayCsH0",
                "title": "Smash Mouth - I'm A Believer"
            },
            {
                "id": "L_jWHffIx5E",
                "title": "Smash Mouth - All Star"
            },
            {
                "id": "HEXWRTEbj1I",
                "title": "Haddaway - What Is Love [Official]"
            },
            {
                "id": "6hzrDeceEKc",
                "title": "Oasis - Wonderwall - Official Video"
            },
            {
                "id": "r8OipmKFDeM",
                "title": "Oasis - Don't Look Back In Anger (Official Video)"
            },
            {
                "id": "CU3mc0yvRNk",
                "title": "The Dandy Warhols - Bohemian Like You"
            },
            {
                "id": "fJ9rUzIMcZQ",
                "title": "Queen - Bohemian Rhapsody (Official Video)"
            },
            {
                "id": "e-ORhEE9VVg",
                "title": "Taylor Swift - Blank Space"
            },
            {
                "id": "nfWlot6h_JM",
                "title": "Taylor Swift - Shake It Off"
            },
            {
                "id": "djV11Xbc914",
                "title": "a-ha - Take On Me (Official Video)"
            },
            {
                "id": "qeMFqkcPYcg",
                "title": "Eurythmics - Sweet Dreams (Are Made Of This) (Official Video)"
            },
            {
                "id": "pL4uESRCnv8",
                "title": "Aerosmith - Walk This Way (from You Gotta Move)"
            },
            {
                "id": "X_I4wtNPv5w",
                "title": "Hall & Oates ~ You Make My Dreams Come True"
            },
            {
                "id": "iPUmE-tne5U",
                "title": "Katrina & The Waves - Walking On Sunshine"
            },
            {
                "id": "a_4G3HjGNbw",
                "title": "Nyan Cat - Smooth Jazz Cover"
            },
            {
                "id": "rjlSiASsUIs",
                "title": "Marvin Gaye - Sexual Healing"
            },
            {
                "id": "fF4XHz6RHeI",
                "title": "Men Without Hats - Safety Dance [Music Video]"
            },
            {
                "id": "eH3giaIzONA",
                "title": "Whitney Houston - I Wanna Dance With Somebody"
            },
            {
                "id": "ZHwVBirqD2s",
                "title": "Elton John - I'm Still Standing"
            },
            {
                "id": "qchPLaiKocI",
                "title": "Kool & The Gang - Get Down On It"
            },
            {
                "id": "hCuMWrfXG4E",
                "title": "Billy Joel - Uptown Girl"
            },
            {
                "id": "_6FBfAQ-NDE",
                "title": "Depeche Mode - Just Can't Get Enough (Remastered Video)"
            },
            {
                "id": "rQqwG_rQx7A",
                "title": "The pointer sisters - I'm so excited"
            },
            {
                "id": "zXt56MB-3vc",
                "title": "UB40 - Red Red Wine"
            },
            {
                "id": "MmyDosjjP5U",
                "title": "Fleetwood Mac - Everywhere  (1987)"
            },
            {
                "id": "r_GH6M7cUq4",
                "title": "Kim Wilde - Kids in America (1981)"
            },
            {
                "id": "SGyOaCXr8Lw",
                "title": "The Rolling Stones - Start Me Up - Official Promo"
            },
            {
                "id": "yK0P1Bk8Cx4",
                "title": "Kenny Loggins - Danger Zone"
            },
            {
                "id": "s36eQwgPNSE",
                "title": "Funkytown- Lipps Inc (original)"
            },
            {
                "id": "uv7y6PKEYms",
                "title": "Luther Vandross-Never Too Much"
            },
            {
                "id": "9f06QZCVUHg",
                "title": "Bryan Adams - Summer of 69"
            },
            {
                "id": "XZVpR3Pk-r8",
                "title": "Soft Cell - Tainted Love"
            },
            {
                "id": "W8r-tXRLazs",
                "title": "The Buggles - Video Killed The Radio Star"
            },
            {
                "id": "C-u5WLJ9Yk4",
                "title": "Britney Spears - ...Baby One More Time"
            },
            {
                "id": "1VQ_3sBZEm0",
                "title": "Foo Fighters - Learn To Fly"
            },
            {
                "id": "fC_q9KPczAg",
                "title": "Barenaked Ladies - One Week (Video)"
            },
            {
                "id": "8WEtxJ4-sh4",
                "title": "TLC - Waterfalls"
            },
            {
                "id": "NHozn0YXAeE",
                "title": "Hanson - MMMBop"
            },
            {
                "id": "mMfxI3r_LyA",
                "title": "Modjo - Lady (Hear Me Tonight) (Official Video)"
            },
            {
                "id": "IwBS6QGsH_4",
                "title": "Will Smith - Miami"
            },
            {
                "id": "eFTLKWw542g",
                "title": "Billy Joel - We Didn't Start the Fire (Official Video)"
            },
            {
                "id": "eqzWOmoger0",
                "title": "Taylor Swift   I Knew You Were Trouble Goat Edition"
            },
            {
                "id": "6M6samPEMpM",
                "title": "Backstreet Boys - Everybody (Backstreet's Back) (Official Video)"
            },
            {
                "id": "_IrQHeDcMi8",
                "title": "LunchMoney Lewis - Bills (Official Video)"
            },
            {
                "id": "4fndeDfaWCg",
                "title": "Backstreet Boys - I Want It That Way"
            },
            {
                "id": "KCkmIyC6v00",
                "title": "Chumbawamba - Tubthumping"
            },
            {
                "id": "bd2B6SjMh_w",
                "title": "Gnarls Barkley - Crazy"
            },
            {
                "id": "GP3Exc5tCtc",
                "title": "Turn Me On (video) original little X video edited to new alb"
            },
            {
                "id": "HyHNuVaZJ-k",
                "title": "Gorillaz - Feel Good Inc. (Official Video)"
            },
            {
                "id": "IKqV7DB8Iwg",
                "title": "The Black Eyed Peas - Let's Get It Started"
            },
            {
                "id": "M97vR2V4vTs",
                "title": "Rudimental - Waiting All Night ft. Ella Eyre [Official Video]"
            },
            {
                "id": "8ip8OsExLJs",
                "title": "Rizzle Kicks - Down With The Trumpets"
            },
            {
                "id": "bbqVg_23otg",
                "title": "Amerie - 1 Thing"
            },
            {
                "id": "4HLY1NTe04M",
                "title": "Mark Ronson - Valerie ft. Amy Winehouse"
            },
            {
                "id": "oABEGc8Dus0",
                "title": "Rudimental - Feel The Love ft. John Newman [Official Video]"
            },
            {
                "id": "Ic5vxw3eijY",
                "title": "Estelle - American Boy [Feat. Kanye West] [Video]"
            },
            {
                "id": "QGJuMBdaqIw",
                "title": "Katy Perry - Firework (Official)"
            },
            {
                "id": "_ovdm2yX4MA",
                "title": "Avicii - Levels"
            },
            {
                "id": "y6120QOlsfU",
                "title": "Darude - Sandstorm"
            },
            {
                "id": "rClUOdS5Zyw",
                "title": "Jason Derulo - \"Want To Want Me\" (Official Video)"
            },
            {
                "id": "nFZP8zQ5kzk",
                "title": "Aloe Blacc - I Need A Dollar"
            },
            {
                "id": "bKxodgpyGec",
                "title": "Cee Lo Green - Forget You"
            },
            {
                "id": "kv_cwzAIOHs",
                "title": "Duke Dumont - Won't Look Back"
            },
            {
                "id": "SXiSVQZLje8",
                "title": "Ariana Grande - Side To Side ft. Nicki Minaj"
            },
            {
                "id": "PWgvGjAhvIw",
                "title": "OutKast - Hey Ya!"
            },
            {
                "id": "koVHN6eO4Xg",
                "title": "T.I. - Live Your Life [feat. Rihanna] (Video)"
            },
            {
                "id": "mqWq_48LxWQ",
                "title": "Mike Posner - Cooler Than Me"
            },
            {
                "id": "3OnnDqH6Wj8",
                "title": "Flo Rida - Good Feeling [Official Video]"
            },
            {
                "id": "_X_1o3Qw4KM",
                "title": "Fatboy Slim - Praise You"
            },
            {
                "id": "w869Avr_fXI",
                "title": "Caesars Palace - Jerk It Out (Official Video)"
            },
            {
                "id": "0CGVgAYJyjk",
                "title": "MIKA - Grace Kelly"
            },
            {
                "id": "O0lf_fE3HwA",
                "title": "Gwen Stefani - The Sweet Escape ft. Akon"
            },
            {
                "id": "oEauWw9ZGrA",
                "title": "Rihanna - Pon de Replay (Internet Version)"
            },
            {
                "id": "III3G1egUcU",
                "title": "Labrinth - Express Yourself"
            },
            {
                "id": "ma9I9VBKPiw",
                "title": "Arctic Monkeys - 'Fluorescent Adolescent' (2007)"
            },
            {
                "id": "jGflUbPQfW8",
                "title": "OMI - Cheerleader (Felix Jaehn Remix) [Official Video]"
            },
            {
                "id": "y6y_4_b6RS8",
                "title": "R. Kelly - Ignition (Remix) (Official Video)"
            },
            {
                "id": "6JCLY0Rlx6Q",
                "title": "WALK THE MOON - Shut Up and Dance"
            },
            {
                "id": "vWaRiD5ym74",
                "title": "DNCE - Cake By The Ocean"
            },
            {
                "id": "Ct6BUPvE2sM",
                "title": "PIKOTARO - PPAP (Pen Pineapple Apple Pen) (Long Version) [Official Video]"
            },
            {
                "id": "iEPTlhBmwRg",
                "title": "Maroon 5 - Moves Like Jagger ft. Christina Aguilera"
            },
            {
                "id": "2zNSgSzhBfM",
                "title": "MACKLEMORE & RYAN LEWIS - CAN'T HOLD US FEAT. RAY DALTON (OFFICIAL MUSIC VIDEO)"
            }
        ]);

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    function loadNextSong() {
        var url = BASE_URL + "/api/getNextSong";
        //Make an AJAX request to get the next song
        $.getJSON(url)
            .then(function(resp) {
                console.log("GET NEXT SONG");
                if (resp.songID) {
                    console.log("NExt song ID:");
                    console.log(resp.songID);
                    $("#main-container").tubeplayer("play", resp.songID);
                    $("#nowplaying").text("Now playing: " + resp.songName);
                } else {
                    console.log("play backup");
                    // otherwise, we need to go to our list of backup songs
                    var currentSong = BACKUP_PLAYLIST[currentIndex];
                    // play the song
                    $("#main-container").tubeplayer("play", currentSong.id);
                    $("#nowplaying").text("Now playing: " + currentSong.title); // TODO get song name from array
                    // increment the counter
                    currentIndex = (currentIndex + 1) % BACKUP_PLAYLIST.length;
                }
                // query API to get the entire queue
                // /api/getQueuedIds/  GET request. resp.queue is the queue.
                $.getJSON(location.origin + "/api/getQueuedIds")
                    .then(function(information) {
                        // console.log("GET JSON");
                        // console.log(information);
                        renderSongQueue(information.queue);
                    });
                // get details of songs

                // render the queue itself on jquery
            });
    }

    $("#main-container").tubeplayer({
        initialVideo: "go9D8_GWvh8",
        allowFullScreen: "false",
        controls: 1,
        annotations: false,
        onPlayerLoaded: function() {
            // console.log("Song loaded");
            $.getJSON(location.origin + "/api/getQueuedIds")
                .then(function(information) {
                    // console.log("GET JSON");
                    // console.log(information);
                    renderSongQueue(information.queue);
                });
        },
        onPlayerEnded: function() {
            // console.log("Song ended now");
            loadNextSong();
        },
        onErrorNotFound: function() {
            console.log("Error: video not found");
        },
        onErrorNotEmbeddable: function() {
            console.log("Error: video not embeddable");
        },
        onErrorInvalidParameter: function() {
            console.log("Error: invalid param")
        },
        onMute: function() {
            console.log("on mute called");
        }
    });



    function getQueue() {
        $.getJSON(location.origin + "/api/getQueuedIds")
            .then(function(information) {
                // console.log("GET JSON");
                // console.log(information);
                renderSongQueue(information.queue);
            });
    }
    setInterval(getQueue, 10000);

    function renderSongQueue(songQueue) {

        // We go through the song queue, in order of ID.
        // for each:
        // render the item

        // <li class="list-group-item justify-content-between">
        //         SONG NAME
        //     <input type="button" class="btn btn-danger remove-song" value=" X ">
        //         </li>

        $('#queue-list').empty(); // empty the queue.

        songQueue.forEach(function(song) {
            // console.log("New Song", song);
            // for each, render an item
            //create the separator object
            var li = $("<li>");
            li.addClass("list-group-item justify-content-between");
            li.text(song.title);

            // Create the delete button
            var btnRemove = $("<button>");
            btnRemove.addClass("btn btn-danger remove-song");
            btnRemove.text("X");
            btnRemove.attr("type", "button");
            btnRemove.data("id", song.id); //store the song ID too.
            btnRemove.on("click", function() {
                var id = $(this).data("id");

                $.post(location.origin + '/api/removeSong', {
                        "id": id
                    }, null, 'json')
                    .then(function(data) {
                        if (data.err) {
                            swal("Oops...", "We couldn't delete the song.", "error");
                        } else {
                            renderSongQueue(data.queue);
                        }
                    });
            });

            li.append(btnRemove);
            $("#queue-list").append(li);
        });
    }


});
