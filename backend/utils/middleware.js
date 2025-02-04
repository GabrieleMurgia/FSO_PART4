const requestLogger = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  };
  
  const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' });
  };
  
  const errorHandler = (error, req, res, next) => {
    console.error(error.message);
  
    if (error.name === 'CastError' && error.kind === 'ObjectId') {
      return res.status(400).send({ error: 'malformatted id' });
    } else if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
  
    next(error);
  };
  
  module.exports = {
    requestLogger,
    unknownEndpoint,
    errorHandler,
  };
  