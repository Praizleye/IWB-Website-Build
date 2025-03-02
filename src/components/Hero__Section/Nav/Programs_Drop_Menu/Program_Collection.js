import { CollectionWrapper } from "./Programs_Drop_Menu.styled";
import React from "react";

export default function ProgramCollection({ Icon, header, programs }) {
  return (
    <CollectionWrapper>
      {(Icon || header) && (
        <div className="header">
          <Icon className="icon" />
          <h6>{header}</h6>
        </div>
      )}
      <ul>
        {programs.map(({ title, link }) => (
          <li key={title}>
            <a href={link} target="_blank" rel="noreferrer" className="program">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </CollectionWrapper>
  );
}
