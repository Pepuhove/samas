import React from "react";
import "./ThabangArtz.css";

function ThabangArtz() {
    return (
        <div className="cntr">
            <h3>Thabang Artz</h3>
            <div className="cntr-info">
                <p>
                    Thabang Artz was founded by Fanuel Mutemasango when he started collecting African Art in 1982 after a journey into Africa.
                    <br />
                    When Paul arrived in a small town of Mutare on the outskirts of Eastern Zimbabwe, chance or perhaps fate had brought him to meeting for the first time Casper Darare and his African Tribal brother Fanuel Mutemesango.
                    <br />
                    The friendship that formed led Paul to begin exploring African Art, particularly stone art created by the Shona people of Zimbabwe and resulted in Paul developing an understanding of stone and quality artwork.
                    <br />
                    Subsequently, Paul developed lasting friendships with many other African artists, including TM Gidi, David Sibanda, Tony Cande, Zachariah Njobo, Washington Matafi, Tawanda Mutem, DCN Moyo, and many others.
                    <br />
                    This resulted in a mutual exchange of knowledge with an understanding of quality workmanship, stone selection, and the choice of finishes required to create masterpieces that will be, and are, passed from generation to generation as inheritance pieces.
                    <br />
                    In 1992 Paul started Batanai Artworks in Rosebank, a suburb of Johannesburg, South Africa. The art attracted many admirers and collectors throughout the world resulting in sales and exports to Holland, England, Switzerland, Germany, Austria, France, Spain, Belgium, Australia, Singapore, China, Japan, and Dubai.
                </p>
            </div>

            <div className="info-cntr">
                <img src="./public/img/mstr.jpg" alt="Fanuel the artist" />
                <h3>Breathing Life into Stone</h3>
                    <p>
                    This piece, carved from the precious Butter Jade, is a story of patience and connection.
                    "When I first held this stone, it felt alive, as though it carried whispers of its long journey through the earth. 
                    Butter Jade is not just any stone—it’s soft to the touch but strong in spirit, a perfect canvas for an artist’s vision."<br />
                   
                    "I didn’t force the design; I listened to the stone. 
                    Its natural patterns spoke to me of movement, of flowing rivers and the cycles of life. Every cut, every detail, was a dialogue between my hands and the Butter Jade. 
                    The spheres you see represent the unity of all things, and the curves reflect the fluidity of existence—how everything is connected, always moving, always evolving."<br />

                   "This sculpture is not just a piece of art—it’s a celebration of the earth’s beauty and the stories it holds.
                    It reminds us that even the hardest materials can be shaped into something soft, flowing, and alive with meaning."
                    <br /> <br />
                    <a href="/about" className="btn unique-btn">Learn more</a> 
                    </p>
            </div>

            <div className="sculpture">
                <h4>Sculpted pieces</h4>
                <h2>Timeless Stone<span>Creations</span></h2>
                <h4>By<span>Fanuel Mutemasango</span></h4>
                <div className="sculp-grid">
                    <div><img src="./public/img/queen-3.jpg" alt="face of a zulu queen" />
                        <p>AFRICAN QUEEN</p>
                    </div>
                    <div> <img src="./public/img/mother.jpg" alt="Fanuel the artist" />
                        <p>MOTHER AND CHILD</p>
                    </div>
                    <div><img src="./public/img/zim.jpg" alt="zimbabwe crying" />
                        <p>ZIMBABWE CRYING</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ThabangArtz;
