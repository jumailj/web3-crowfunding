import React, { useState, useEffect } from 'react'
import { useLogout } from "@thirdweb-dev/react";
import { useDisconnect } from "@thirdweb-dev/react"

const LogoutPage = () => {

    const { logout, isLoading } = useLogout();
    const disconnect = useDisconnect()

  return (
    <div className="bg-[#1c1c24] h-2/4 flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
          {/* <h1 className="font-epilogue font-semibold text-[18px] text-white text-left">Logout</h1> */}

          <button onClick={() => disconnect()} className="bg-[#4acd8d] hover:bg-[#43b67e] text-white font-bold py-2 px-4  rounded">{isLoading ? "Logging out..." : "Logout"} </button>

    </div>

  )
}

export default LogoutPage


