import ApiHelper, { Pazzle } from "@/assets/db/data";


class Game {
  id: number;
  name: string;
  tasks: Pazzle["id"][];
  players: {
    [key: string]: Pazzle["id"][]; // key - name; value - wins
  };
  currentTasks: {
    id: number;
    data: Pazzle;
    isPlay: boolean;
    isShowAnswer: boolean;
    isShowResults: boolean;
    isLastTask: boolean;
  };
  settings: {
    isVolume: boolean;
    secondsForTask: number;
    hideTasks: Pazzle["id"][];
  };

  constructor(name: string, playersNames: string[]) {
    this.name = name;
    this.id = GAMES.length;
    this.players = playersNames.reduce((acc: Game["players"], name: string) => {
      acc[name] = [];
      return acc;
    }, {});
    this.tasks = ApiHelper.getShakeTasksID();
    this.currentTasks = this.nextLevel(0);
    this.settings = {
      isVolume: true,
      secondsForTask: 10,
      hideTasks: [],
    };
  }

  public nextLevel(id: number) {
    const isLastTask = id === this.tasks.length - 1;

    return {
      id,
      data: ApiHelper.getTask(id),
      isPlay: false,
      isShowAnswer: false,
      isShowResults: false,
      isLastTask,
    };
  }

}


const GAMES: Game[] = [];



export default function useG() {
  return (
    <div>useG</div>
  )
}
