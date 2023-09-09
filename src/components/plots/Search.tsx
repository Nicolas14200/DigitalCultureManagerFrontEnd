import React, { useEffect, useState } from "react";
import "../../styles/search.css";
import { store } from "redux/store";
import { getAllPlots, getPlotById, search } from "redux/actions/plot.action";
import { Plot } from "./Plot";
import { SearchBar } from "./SearchBar";

export function Search() {
  
  const [searchTerm, setsearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [monoPlot, setMonoPlot] = useState();

  const majStart = async () => {
    let plots = await store.dispatch(await getAllPlots());
    setData(await plots.data);
  };

  useEffect(() => {
    majStart();
  }, []);

  const handlePlotClick = async (plotId: string) => {
    let plot = await store.dispatch(await getPlotById(plotId));
    setMonoPlot(plot.data)
    
  };

  const maj = async () => {
    const str = await store.dispatch(await search(""))
    setsearchTerm(str)
    console.log(str)
  }

  maj()

  if (!monoPlot){
      
    return (
    <>
      <SearchBar />
      <div className="search_results">
        {data.length > 0 ? (
          data
            .filter((val) => {
              return val.name.toLowerCase().includes(searchTerm.toLowerCase());
            })
            .map((plot, index) => {
              return (
                <div
                  className="search_result"
                  key={index}
                  onClick={() => handlePlotClick(plot.id)}
                >
                  {plot.name}
                </div>
              );
            })
        ) : (
          <li>No data available</li>
        )}
      </div>
    </>
  );
  }else{
    return (
      <>
        <Plot {...{plot:monoPlot}} />
      </>
    )
  }

}
