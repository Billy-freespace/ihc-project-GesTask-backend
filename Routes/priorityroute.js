import {Router} from "express";
const priorityroute = Router();

import priorityCtrl from "../Controllers/getPriority.js";


priorityroute.route("/tasks/priority/:priority")
        .get(priorityCtrl.getPriorities)

export default priorityroute;
