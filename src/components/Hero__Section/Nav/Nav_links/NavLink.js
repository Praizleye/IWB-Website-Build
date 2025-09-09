import React from "react";
import ProgramDropMenu from "../Programs_Drop_Menu/Program_Drop_menu";
import { FaChevronDown } from "react-icons/fa";

export default function NavLink({
  title,
  link = "",
  children = "",
  target = "_self",
  className = "",
  func = undefined,
  mobile,
}) {
  if (children === "") {
    return (
      <li className="app__flex nav-link">
        <a
          href={link}
          target={target}
          className={className}
          id="nav-link"
          onClick={func}
        >
          {title}
        </a>
      </li>
    );
  } else {
    return (
      <li className={`app__flex nav-link ${title}-btn `}>
        <button
          type="button"
          id="nav-link"
          onClick={func}
          className={className}
        >
          {title}
          <FaChevronDown className="icon" />
        </button>
        {!mobile && (
          <ProgramDropMenu className={`${title}-menu`} />
        )}
      </li>
    );
  }
}
