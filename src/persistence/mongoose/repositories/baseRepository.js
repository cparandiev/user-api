module.exports = ({ context, modelName, modelSchema }) => {
  const model = context.model(modelName, modelSchema);

  return {
    getAllAsync: () => model.find().exec()
  };
};
