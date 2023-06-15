import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom"
import { getAllTrains, getOtherDaysTrains, getTrains } from "../../api";
import { ITrain } from "../../types/ITrain";
import { Train } from "../../components/Train";
import { BsArrowRight } from "react-icons/bs";

import './ResultPage.scss';
import { FormSearch } from "../../components/FormSearch";
import { ButtonUpdate } from "../../components/Buttons/ButtonUpdate";
import { InfoMessage } from "./InfoMessage";
import { Messages } from "../../types/Messages";

export const ResultPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const startCity = searchParams.get('startCity')
  const finishCity = searchParams.get('finishCity')

  const [trains, setTrains] = useState<ITrain[]>([]);

  const [shouldShowForm, setShouldShowForm] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (startCity !== null 
        && finishCity !== null
        ) {
      getTrains(startCity, finishCity)
        .then(trains => setTrains(trains))
      }
  }, [startCity, finishCity])

  useEffect(() => {
    window.scrollTo(0, 0);
    setShouldScroll(false);
  }, [shouldScroll])

  const handleChange = () => {
    setShouldShowForm(true);
    setShouldScroll(true);
  }

  return (
    <div className="resultPage">
      {shouldShowForm && (
        <FormSearch />
      )}
    
      <div className='resultPage_title'>
        <div className='title-content'>
          <p>{startCity}</p>

          <BsArrowRight />

          <p>{finishCity}</p>
        </div>
      </div>

      <div className="resultPage_updateContent">
        <ButtonUpdate onUpdate={handleChange} />
      </div>

      <div className="resultPage_content">
        {trains.length > 0 ? (
          trains.map((train) => (
            <div key={train.id}>
              <Train
                train={train}
              />
            </div>
          ))
          ) : (
            <InfoMessage text={Messages.NoTrainsToday} />
          )}
      </div>
    </div>
  )
} 