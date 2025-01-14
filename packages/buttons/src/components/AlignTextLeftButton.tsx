import React from 'react';
import createTextAlignmentButton from '../utils/createTextAlignStyleButton';

export default createTextAlignmentButton({
  alignment: 'left',
  children: (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  ),
});
