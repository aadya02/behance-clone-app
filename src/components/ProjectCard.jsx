import React from 'react';
import Pill from './Pill';
import { ReactComponent as ThumbsUp } from '../assets/thumps-up.svg';
import { ReactComponent as Eye } from '../assets/eye.svg';
import { PRO, PROJECT_TITLE_LIMIT } from '../constants';
import abbreviateNumber from '../utils/abbreviateNumber';

const ProjectCard = ({ projectDetails }) => {
  const { covers, name, stats, owners } = projectDetails;
  const { size_max_808 } = covers;
  const { appreciations, views } = stats;

  return (
    <div className="col-span-12 mx-auto w-full sm:col-span-6 md:col-span-6 lg:col-span-4 xl:col-span-3 2xl:col-span-3 sm:w-fit">
      <img
        src={size_max_808.url}
        alt="project-cover"
        className="rounded-md shadow-sm mb-2 xs:w-full cursor-pointer hover:underline transition-all duration-300 ease-in-out hover:opacity-80 hover:shadow-xl"
        tabIndex={0}
      />
      <div className="flex justify-between">
        <span
          id="project-title"
          className="tracking-wide text-[15px] cursor-pointer hover:underline font-bold w-fit truncate"
          tabIndex={0}
          title={name}
        >
          {name.length > PROJECT_TITLE_LIMIT
            ? `${name.slice(0, PROJECT_TITLE_LIMIT)}...`
            : name}
        </span>
        <span id="likes-views" className="my-auto">
          <div className="flex justify-center">
            <div id="likes" className="flex my-auto text-xs pr-2">
              <span className="my-auto pr-1">
                <ThumbsUp fill="#959595" height={15} width={15} />
              </span>
              <span id="likes-count" className="font-bold">
                {abbreviateNumber(appreciations.all)}
              </span>
            </div>

            <span id="views" className="flex my-auto text-xs">
              <span className="my-auto pr-1">
                <Eye fill="#959595" height={15} width={15} />
              </span>
              <span id="views-count" className="font-bold">
                {abbreviateNumber(views.all)}
              </span>
            </span>
          </div>
        </span>
      </div>

      <div
        id="project-owner"
        className="text-left text-xs w-fit py-1 cursor-pointer hover:underline"
        tabIndex={0}
      >
        {owners[0].displayName}{' '}
        {owners[0].creatorPro.isActive && (
          <Pill text={PRO} className="text-[9px] ml-1" />
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
