import ContactForm from "./ContactForm"
import "./contactMain.css"
import img from "./Images/contactImg.jpg"
export default function(){
    return(
        <div className="contactMain ">
            <div className="Conright">
                <ContactForm/>
            </div>
            

            {/* <div className="left">
                <p>For general inquiries or feedback, you can contact us via email at contact@<a href="">convoconnect.com</a>.</p>

                <p>We also encourage you to follow us on social media for updates, news, and helpful tips. Connect with us on <a href="">Twitter</a>, <a href="">Facebook</a>, and <a href="">LinkedIn</a>.</p>

            </div>
            <div className="right">
                <img src={img} alt="" />
            </div> */}

        </div>
    )
}