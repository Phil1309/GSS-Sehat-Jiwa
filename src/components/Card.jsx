import { MagicCard } from "./magicui/magic-card";
import ShinyButton from "./magicui/shiny-button";
import PropTypes from "prop-types";

function Card({ 
  text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse laboriosam ipsam, expedita voluptas suscipit earum?",
  headingText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  onClicked = () => { window.location.href = "/#" },
  button = false
}) {
  const showButton = button ? <ShinyButton text="Lihat" className="self-start" onClicked={onClicked} /> : ""
  return (
    <div className="">
      <MagicCard className="cursor-pointer max-w-[300px] overflow-hidden rounded-lg shadow-lg md:max-w-2xl lg:max-h-fit">
        <div className="flex flex-col h-full">
          <img 
            src="https://via.placeholder.com/1366x768" 
            alt="Card image" 
            className="w-full h-[200px] object-cover"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{headingText}</h3>
            <p className="text-sm text-gray-600 mb-4 flex-grow">
              {text}
            </p>
            {showButton}
          </div>
        </div>
      </MagicCard>
    </div>
  );
}

Card.propTypes = {
  text: PropTypes.string,
  headingText: PropTypes.string,
  onClicked: PropTypes.func
};

export default Card;
