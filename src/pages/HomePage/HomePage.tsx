import { useEffect, useState } from "react";
import { FormSearch } from "../../components/FormSearch";
import './HomePage.scss';
import { getCities } from "../../api";

export const HomePage = () => {
  return (
    <div className="homePage">
      <FormSearch />
    </div>
  )
} 