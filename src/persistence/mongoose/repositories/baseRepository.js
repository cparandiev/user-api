module.exports = ({ context, modelName, modelSchema }) => {
  const model = context.model(modelName, modelSchema);

  return {
    getAllAsync: async () => {
      const dbResponse = await model.find().exec();

      return dbResponse;
    },
    createAsync: async data => {
      const dbResponse = await model.create(data);
      console.log(dbResponse);
      return dbResponse;
    }
  };
};
