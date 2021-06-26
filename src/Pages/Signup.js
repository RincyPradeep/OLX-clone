import React from 'react';

import Signup from '../Components/Signup/Signup';

function SignupPage({favorite}) {
  return (
    <div>
      <Signup favorite={favorite} />
    </div>
  );
}

export default SignupPage;
