
import me3 from "../../assets/About/me3.jpeg";

function AboutSection({handleShowMore, showMore}){
    const text= 
    `After a rewarding 17-year tenure owning a thriving beauty salon, I've transitioned into the dynamic realm of IT and Software Development.

    Having already completed a Certificate IV in IT and with just one month remaining in the project-based bootcamp at She Codes Australia, I'm eager to explore opportunities as a Junior Frontend Developer.
    This career shift reflects my passion for technology and coding, and I'm excited to apply my skills and knowledge in this exciting new chapter.

    Outside of coding, I love soaking up nature's wonders through hiking and snorkeling. As a dedicated mom, wife, and enthusiastic member of a women's softball team, I thrive in teamwork and treasure moments with my loved ones. You'll catch me savoring quotes, making lists, enjoying coffee, and relishing any meal that lets me skip kitchen duty!
    
    In a nutshell, my transition from salon owner to aspiring IT pro embodies my ongoing quest for personal growth and adventure. I'm pumped for what lies ahead and can't wait to put my fresh skills to work in this dynamic field!
    `;
    
    const handleShowMoreCallback = () => {
        // Adjust the height of the content after the About section
        const newHeight = showMore ? 'auto' : 'auto';
        // Call the callback function to handle the height adjustment
        // This function should be passed from the parent component
        handleShowMore(newHeight);
    };

    const marginTop = showMore ? 'mt-auto' : 'mt-8';
    const handleReadMoreClick = (event) => {
        event.preventDefault(); 
        handleShowMore(!showMore);
        handleShowMoreCallback();
    };

    return (
        <>
        <div className="p-6 mt-8">
            <p className="text-xl">A bit about me...</p>
            <h2 className="neon text-2xl m-4">Developer and Beyond</h2>
        <div className="overflow-hidden rounded-full shadow-2xl">
            <img src={me3} alt="picture of Karla Gaudet with her back turned, in a puddle of water spalshing with her foot"/>
        </div>
        <div className={`p-2 my-8 border-t-2 border-l-2 border-dotted border-zinc-300 overflow-wrap ${marginTop}`}>
            <p className="text-left">
                {showMore 
                ? text
                : `${text.slice(0, 260)}...`}
                <a className="underline text-tan" href='#'
                onClick={handleReadMoreClick}
                >
                {showMore
                ? 'read less'
                : 'read more'}
                </a>
            </p>
        </div>
        </div>
        </>  
    )

}

export default AboutSection;




