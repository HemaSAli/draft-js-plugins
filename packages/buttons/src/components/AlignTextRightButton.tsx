import React from 'react';
import createTextAlignmentButton from '../utils/createTextAlignStyleButton';

export default createTextAlignmentButton({
  alignment: 'right',
  children: (
    <svg
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/>
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  ),
});
