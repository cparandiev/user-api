const applySpecifications = ({ spec, query }) => {
  query.find(spec.where);

  if (spec.order) {
    query.sort(spec.order);
  }
};

module.exports = ({ context, modelName, modelSchema }) => {
  const model = context.model(modelName, modelSchema);

  return {
    getAllAsync: async (spec = {}) => {
      const query = model.find();

      applySpecifications({ spec, query });

      const dbResponse = await query.exec();

      return dbResponse;
    },
    createAsync: async data => {
      const dbResponse = await model.create(data);

      return dbResponse;
    }
  };
};
