import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import { Movie } from "../services/types";
import MovieCard from "../components/MovieCard";
import { Cross, RefreshCcw } from "lucide-react";
import axios from "axios";

const CreateBattlePage: React.FC = () => {
  const [isSearchBarOpen1, setIsSearchBarOpen1] = useState(false);
  const [isSearchBarOpen2, setIsSearchBarOpen2] = useState(false);
  const [selectedMovie1, setSelectedMovie1] = useState<Movie | null>(null);
  const [selectedMovie2, setSelectedMovie2] = useState<Movie | null>(null);

  const openSearchBar1 = () => {
    setIsSearchBarOpen1(true);
  };

  const openSearchBar2 = () => {
    setIsSearchBarOpen2(true);
  };

  const closeSearchBar1 = () => {
    setIsSearchBarOpen1(false);
  };

  const closeSearchBar2 = () => {
    setIsSearchBarOpen2(false);
  };

  const handleSelectMovie1 = (movie: Movie) => {
    setSelectedMovie1(movie);
    closeSearchBar1();
  };

  const handleSelectMovie2 = (movie: Movie) => {
    setSelectedMovie2(movie);
    closeSearchBar2();
  };

  const publishBattle = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3030/api/create-battle",
        {
          movie1Id: selectedMovie1?.id,
          movie2Id: selectedMovie2?.id,
        }
      );

      if (response.status === 200) {
        setSelectedMovie1(null);
        setSelectedMovie2(null);
        console.log("Battle Created");
      } else if (response.status === 405) {
        console.log("This Battle already exists in the Arena.");
      } else {
        console.log("Something went wrong while creating battle");
      }
    } catch (error) {
      console.log("Error while Creating Battle")
      throw error
    }
  };

  return (
    <>
      <div className="bg-[#457b9d]">
        <div className="h-[35rem] flex items-center justify-center">
          {(isSearchBarOpen1 || isSearchBarOpen2) && (
            <div
              className="fixed inset-0 bg-gray z-10 bg-opacity-60 backdrop-blur-lg"
              onClick={isSearchBarOpen1 ? closeSearchBar1 : closeSearchBar2}
            />
          )}

          {isSearchBarOpen1 && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <SearchBar
                onClose={closeSearchBar1}
                onSelectMovie={handleSelectMovie1}
              />
            </div>
          )}

          {isSearchBarOpen2 && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
              <SearchBar
                onClose={closeSearchBar2}
                onSelectMovie={handleSelectMovie2}
              />
            </div>
          )}

          {selectedMovie1 ? (
            <div className="cursor-pointer">
              <MovieCard movie={selectedMovie1} />
              <div
                className="p-4 flex items-center justify-center"
                onClick={openSearchBar1}
              >
                <RefreshCcw />
              </div>
            </div>
          ) : (
            <div onClick={openSearchBar1}>
              <div className="bg-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow w-full cursor-pointer">
                <div className="w-full h-52 sm:h-64 bg-gray-300 rounded-md mb-4 flex justify-center items-center">
                  <Cross size={50} color="rgb(229 231 235)" />
                </div>
                <h1 className="text-xl font-semibold h-14 overflow-hidden mb-2 break-words">
                  Click to Choose a Movie
                </h1>
              </div>
            </div>
          )}
          <span className="mx-4 font-extrabold text-700 text-4xl text-red-800">
            V/S
          </span>

          {selectedMovie2 ? (
            <div className="cursor-pointer">
              <MovieCard movie={selectedMovie2} />
              <div
                className="p-4 flex items-center justify-center"
                onClick={openSearchBar2}
              >
                <RefreshCcw />
              </div>
            </div>
          ) : (
            <div onClick={openSearchBar2}>
              <div className="bg-gray-200 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow w-full cursor-pointer">
                <div className="w-full h-52 sm:h-64 bg-gray-300 rounded-md mb-4 flex justify-center items-center">
                  <Cross size={50} color="rgb(229 231 235)" />
                </div>

                <h1 className="text-xl font-semibold h-14 overflow-hidden mb-2 break-words">
                  Click to Choose a Movie
                </h1>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center p-12">
          {selectedMovie1 && selectedMovie2 ? (
            <div
              className="bg-[#e63946] text-white px-4 py-2 cursor-pointer"
              onClick={publishBattle}
            >
              Begin Battle
            </div>
          ) : (
            <div className="bg-[#65292e] text-white px-4 py-2">
              select Movies
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateBattlePage;
