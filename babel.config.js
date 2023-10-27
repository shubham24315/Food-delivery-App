module.exports = {
    presets: [
        ['@babel/preset-env', {targets: {node: 'current'}}],
        ['@babel/preset-react', {runtime: 'automatic'}],

    ],

  };
  //parcel already has babel installed , now we are trying to configure bable differently.so there will be a conflict between babel and parcel .parcel will have its own babel configuration.parcel configuration will conflict with this configuratuon. so we need to make changes in parcel configuration.

  //in file .parcelrc when we do configuration babel.config.js will not conflict so this file config will be used

  //@babel/preset-react help our testing libaray to convert jsc code to html so that it can read properly