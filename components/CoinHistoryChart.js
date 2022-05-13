import react from "react";
import {useRouter} from "next/router"
import Chart from "./Chart";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const CoinHistoryChart = ({slug}) => {
    const router = useRouter();
    const [coinHistory, setCoinHistory] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const result = await axios.get(`http://localhost:8080/api/v1/${slug}/24h`)

            setCoinHistory(result.data)
            setLoading(false)
        }

        fetchData()
    }, [])

    const fetchHistoryData = async (e, timePeriod) => {
        e.preventDefault();
        setLoading(true)
        const result = await axios.get(`http://localhost:8080/api/v1/${slug}/${timePeriod}`)
        setCoinHistory(result.data)
        setLoading(false)
    }
    return (
        
        <div className="flex flex-col mac-w-6xl p-6 mt-4 h-screen mx-auto">
            <div className="flex space-x-4">
            <button
            onClick={() => {
                router.push("/");
            }}
            type="button"
            className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            </button>  

            <h2 className="font-extrabold text-4xl text-gray-800">{slug}</h2>
            </div>    
            <div className="flex mx-auto">
                <Chart coinHistory={coinHistory}/>
            </div>
            <div className="flex mx-auto mt-12">
        <button
          onClick={(e) => fetchHistoryData(e, "24h")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          24h
        </button>
        <button
          onClick={(e) => fetchHistoryData(e, "7d")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          7d
        </button>
        <button
          onClick={(e) => fetchHistoryData(e, "30d")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          30d
        </button>
        <button
          onClick={(e) => fetchHistoryData(e, "3m")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          3m
        </button>
        <button
          onClick={(e) => fetchHistoryData(e, "1y")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          1y
        </button>
        <button
          onClick={(e) => fetchHistoryData(e, "3y")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          3y
        </button>
        <button
          onClick={(e) => fetchHistoryData(e, "5y")}
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          5y
        </button>
        </div>
        </div>
    )
}

export default CoinHistoryChart