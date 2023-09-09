import React, { useEffect, useState } from "react";
import { PlotState } from "valuesObject/PlotState";
import "../../styles/plot.css";

interface PlotProps {
  plot: PlotState;
}

export const Plot: React.FC<PlotProps> = (plot) => {
  const [state, setState] = useState<PlotState>({
    id: "",
    name: "",
    codeName: "",
    width: 0,
    heigth: 0,
    area: 0,
    ph: 0,
    pebbles: 0,
    plank: 0,
    series: [
      {
        vegetableVariety: "",
        nbPlank: 0,
      },
    ],
    subPlot: [],
    eventCulture: [],
  });
  
  const handleAddSerie = () => {
    console.log("add series")
  }

  useEffect(() => {
    setState({
      area: plot.plot.area,
      codeName: plot.plot.codeName,
      eventCulture: plot.plot.eventCulture,
      heigth: plot.plot.heigth,
      id: plot.plot.id,
      name: plot.plot.name,
      pebbles: plot.plot.pebbles,
      ph: plot.plot.ph,
      plank: plot.plot.plank,
      series: plot.plot.series,
      subPlot: plot.plot.subPlot,
      width: plot.plot.width,
    });
  }, [plot.plot]);
  
  return (
    <div key={state.id} className="plot-details">
      <div className="plot-feature">
        <p className="feature-name">Name:</p>
        <p className="feature-value">{state.name}</p>
       
      </div>
      <div className="plot-feature">
        <p className="feature-name">Code Name:</p>
        <p className="feature-value">{state.codeName}</p>
      </div>
      <div className="plot-feature">
        <p className="feature-name">Width:</p>
        <p className="feature-value">{state.width}</p>
      </div>
      <div className="plot-feature">
        <p className="feature-name">Height:</p>
        <p className="feature-value">{state.heigth}</p>
      </div>
      <div className="plot-feature">
        <p className="feature-name">Area:</p>
        <p className="feature-value">{state.area}</p>
      </div>
      <div className="plot-feature">
        <p className="feature-name">pH:</p>
        <p className="feature-value">{state.ph}</p>
      </div>
      <div className="plot-feature">
        <p className="feature-name">Pebbles:</p>
        <p className="feature-value">{state.pebbles}</p>
      </div>
      <div className="plot-feature">
        <p className="feature-name">Plank:</p>
        <p className="feature-value">{state.plank}</p>
      </div>
      <div className="plot-feature">
        <p className="feature-name">Series:</p>
        {state.series.length > 0 ? (
          state.series.map((serie, index) => (
            <div key={index} className="series">
              <p className="feature-name">Vegetable Variety:</p>
              <p className="feature-value">{serie.vegetableVariety}</p>
              <p className="feature-name">Number of Plank:</p>
              <p className="feature-value">{serie.nbPlank}</p>
              <button className="add-button-series" >ADD</button>
            </div>
          ))
        ) : (
          <div className="feature-value">No series data available
            <button className="add-button" onClick={handleAddSerie}>ADD</button>
          </div>
        )}
      </div>
      <div className="plot-feature">
        <p className="feature-name">SubPlot:</p>
        {state.subPlot.length > 0 ? (
          state.subPlot.map((plot, index) => (
            <div key={index} className="sub-plot">
              <p className="feature-value">{plot}</p>
              <button className="add-button">ADD</button>
            </div>
          ))
        ) : (
          <div 
          className="feature-value">No sub-plot data available
          <button className="add-button">ADD</button>
          </div>
        )}
      </div>
      <div className="plot-feature">
        <p className="feature-name">Event:</p>
        {state.eventCulture.length > 0 ? (
          state.eventCulture.map((event, index) => (
            <div key={index} className="event">
              <p className="feature-value">{event}</p>
              <button className="add-button">ADD</button>
            </div>
          ))
        ) : (
          <div className="feature-value">
            No event data available
            <button className="add-button">ADD</button>
            </div>
        )}
      </div>
    </div>
  );
};
