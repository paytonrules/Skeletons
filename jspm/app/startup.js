import { Ticker, Stage, SpriteSheet, SpriteSheetUtils, Sprite, Shadow } from 'easeljs';

let stage = new Stage("game");

let monsterRun = new Image();
let monsterIdle = new Image();

let bmpAnimation, bmpAnimationIdle;
let numberOfImagesLoaded = 0;
function handleImageLoad() {
  numberOfImagesLoaded++;

  if (numberOfImagesLoaded === 2) {
    startGame();
  }
}

function startGame() {
  let sheet = new SpriteSheet({
    images: [monsterRun],
    frames: {width: 64, height: 64, regX: 32, regY: 32},
    animations: {
      walk: [0, 9, "walk", 0.25]
    }
  });

  bmpAnimation = new Sprite(sheet);
  bmpAnimation.gotoAndPlay("walk");
  bmpAnimation.shadow = new Shadow("#454", 0, 5, 4);
  bmpAnimation.name = "monster1";
  bmpAnimation.vX = 1;
  bmpAnimation.x = 16;
  bmpAnimation.y = 32;

  bmpAnimation.currentFrame = 0;
  stage.addChild(bmpAnimation);

  SpriteSheetUtils.addFlippedFrames(sheet, true, false, false);

  let idleSheet = new SpriteSheet({
    imgaes: [monsterIdle],
    frames: { width: 64, height: 64, regX: 32, regY: 32 },
    aminations: {
      idle: [0, 10, "idle", 0.25]
    }
  });

  /*
   *bmpAnimationIdle = new Sprite(idleSheet);
   *bmpAnimationIdle.name = "monsteridle1";
   *bmpAnimationIdle.x = 16;
   *bmpAnimationIdle.y = 32;
   */
}

function handleImageError() {
  console.log("error");
}

monsterRun.onload = handleImageLoad;
monsterRun.onerror = handleImageError;
monsterRun.src = "images/Run.png";

monsterIdle.onload = handleImageLoad;
monsterIdle.onerror = handleImageError;
monsterIdle.src = "images/Idle.png";


Ticker.useRAF = true;
Ticker.setFPS(60);
Ticker.addEventListener("tick", tick);

function tick() {
  if (bmpAnimation) {
    if (bmpAnimation.x >= 184) {
      bmpAnimation.direction = -90;
      bmpAnimation.gotoAndPlay("walk");
    }

    if (bmpAnimation.x < 16) {
      bmpAnimation.direction = 90;
      bmpAnimation.gotoAndStop("walk");
      stage.removeChild(bmpAnimation);
      /*
       *bmpAnimationIdle.gotoAndPlay("idle");
       *stage.addChild(bmpAnimationIdle);
       */
    }

    if (bmpAnimation.direction == 90) {
      bmpAnimation.x += bmpAnimation.vX;
    } else {
      bmpAnimation.x -= bmpAnimation.vX;
    }
  }

  stage.update();
}
