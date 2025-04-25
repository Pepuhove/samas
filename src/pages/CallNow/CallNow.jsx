import React from "react";
import Footer from "../../components/Footer/Footer";

function CallNow() {
    return (
       <>
        <div>
        <li>
            <button onClick={() => window.location.href = "tel:+1234567890"}>
        CALL NOW
    </button>
</li>

        </div>
        <Footer/>
       </>
    );
}

export default CallNow;
