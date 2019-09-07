{"filter":false,"title":"application_controller.rb","tooltip":"/app/controllers/application_controller.rb","undoManager":{"mark":16,"position":16,"stack":[[{"start":{"row":1,"column":39},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"insert","lines":["  "]},{"start":{"row":2,"column":2},"end":{"row":3,"column":0},"action":"insert","lines":["",""]},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":3,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":["def routing_error(error = 'Routing error', status = :not_found, exception=nil)","render_exception(404, \"Routing Error\", exception)","end"],"id":3}],[{"start":{"row":4,"column":0},"end":{"row":4,"column":4},"action":"insert","lines":["    "],"id":4},{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":5,"column":7},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "]},{"start":{"row":6,"column":4},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]},{"start":{"row":7,"column":4},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":8,"column":4},"end":{"row":11,"column":3},"action":"insert","lines":["def action_missing(m, *args, &block)","  Rails.logger.error(m)","  redirect_to '/*path'","end"],"id":6}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"remove","lines":["    "],"id":7}],[{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":[" "],"id":8},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":9,"column":2},"end":{"row":9,"column":4},"action":"insert","lines":["  "],"id":9}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":4},"action":"remove","lines":["    "],"id":10}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":[" "],"id":11},{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":3,"column":3},"end":{"row":6,"column":4},"action":"remove","lines":["ef routing_error(error = 'Routing error', status = :not_found, exception=nil)","    render_exception(404, \"Routing Error\", exception)","  end","    "],"id":12}],[{"start":{"row":3,"column":1},"end":{"row":8,"column":3},"action":"remove","lines":[" d","    ","  def action_missing(m, *args, &block)","    Rails.logger.error(m)","  redirect_to '/*path'","end"],"id":13}],[{"start":{"row":3,"column":1},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":14},{"start":{"row":4,"column":0},"end":{"row":4,"column":1},"action":"insert","lines":[" "]}],[{"start":{"row":3,"column":1},"end":{"row":3,"column":4},"action":"insert","lines":["   "],"id":15}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":4},"action":"remove","lines":["    "],"id":16}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":[" "],"id":17},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":3,"column":2},"end":{"row":6,"column":3},"action":"insert","lines":["rescue_from ActionController::RoutingError do |exception|"," logger.error 'Routing error occurred'"," render plain: '404 Not found', status: 404 ","end"],"id":18}]]},"ace":{"folds":[],"scrolltop":5.5,"scrollleft":0,"selection":{"start":{"row":6,"column":3},"end":{"row":6,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1567886441968,"hash":"ec4426a2c369dd25d2e755b9d9cdf08bb273079f"}