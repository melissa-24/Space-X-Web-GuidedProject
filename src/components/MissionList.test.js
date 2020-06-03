import React from "react";
import {render} from '@testing-library/react';

import MissionsList from './MissionsList.js';

test("renders MissionsList", ()=> {
  render(<MissionsList missions={[]}/>);
});

test("render MissionsList with valid Missions", ()=>{
  const mockData = [{mission_id:'id1', mission_name:'Commercial Resupply Services'}];
  const {queryAllByText, rerender} = render(<MissionsList missions={[]} />);

  let allMissions = queryAllByText(/resupply/i);
  expect(allMissions).toHaveLength(0);
  expect(allMissions).toStrictEqual([]);

  rerender(<MissionsList missions={mockData} />);
  allMissions = queryAllByText(/resupply/i);
  expect(allMissions).toHaveLength(1);
})