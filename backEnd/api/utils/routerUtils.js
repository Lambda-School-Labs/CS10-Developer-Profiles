const utils = require('../utils/authUtils');

module.exports = {
  login: function loginUser(model, req, res) {
    const { email, password } = req.body;

    // prettier-ignore
    model
      .findOne({ email }, { password: 1, _id: 1 })
      .then((user) => {
        const { _id } = user;
        // console.log(companyName);
        user
          .isValidPassword(password)
          .then((validPassword) => {
            if (!validPassword) {
              return res
                .status(422)
                .json({ 'Bad Credentials': 'Please, check your credentials, there are some wrong data.' });
            }

            const jwt = utils.createToken({ _id, email });
            res.status(200).json({ email, jwt });
          })
          .catch((e) => {
            // console.log('error', e);
            res.status(404).json({ e });
          });
      })
      .catch((e) => {
        // console.log('error', e);
        res.status(500).json({ e });
      });
  },
};
