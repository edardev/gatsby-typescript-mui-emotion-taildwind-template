/* eslint-disable import/prefer-default-export */
import * as React from 'react';
import TopLayout from './TopLayout';
import '../../src/styles/global.css'


export const wrapRootElement = ({ element }: any) => {
  return <TopLayout>{element}</TopLayout>;
};
