import React from "react";
import PropTypes from "prop-types";
import "./Card.css";
import {
  Card as MTCard,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { cardPropTypes } from "../cardPropTypes";

export default function Card({ character, select, cardsTab }) {
  const {
    name,
    image: { url },
  } = character;
  const listStats = Object.entries(character.powerstats);
  const style =
    "flex flex-col justify-center items-center shadow-lg bg-black p-0.05 rounded-xl border-red-400 border-solid border-2 w-12 h-12 z-10 ";

  return (
    <div
      className="flex justify-center box-content w-52"
      onClick={select}
      onKeyUp={select}
      aria-hidden="true"
    >
      <MTCard
        className={` bg-black m-4 relatives border-2 border-black border-solid ${
          cardsTab ? "w-30 h-56" : "w-48 h-80 card"
        }`}
      >
        <CardHeader floated={false} className="-m-0">
          <img className="" src={url} alt={name} />
          <Typography>
            {listStats.map((stat) => {
              const statName = stat[0];
              const statValue = stat[1];
              const statNameShort = statName.slice(0, 3).toUpperCase();
              return (
                <div
                  className={`
                  ${style} 
                  ${statName === "intelligence" && "absolute top-[0%]"}
                  ${
                    statName === "power" &&
                    "absolute top-[50%] -translate-y-1/2"
                  }
                  ${statName === "durability" && "absolute bottom-[0%]"}
                  ${statName === "strength" && "absolute top-[0%] right-0"}
                  ${
                    statName === "speed" &&
                    "absolute top-[50%] right-0 -translate-y-1/2"
                  }
                  ${statName === "combat" && "absolute bottom-[0%] right-0"}`}
                >
                  <div className="text-yellow-600">
                    {statNameShort === "SPE" ? "SPD" : statNameShort}
                  </div>
                  <div className="text-white ">{statValue}</div>
                </div>
              );
            })}
          </Typography>
        </CardHeader>
        <CardBody className="text-center p-0">
          <Typography
            variant="h4"
            color="blue-gray "
            className="mb-2  text-yellow-500"
          >
            {name}
          </Typography>
        </CardBody>
      </MTCard>
    </div>
  );
}

Card.propTypes = {
  character: cardPropTypes.isRequired,
  select: PropTypes.func.isRequired,
  cardsTab: PropTypes.bool.isRequired,
};
