## [2.0.1](https://github.com/streamich/libreact/compare/v2.0.0...v2.0.1) (2018-06-28)


### Bug Fixes

* 🐛 fix .setState() warning in <MediaSensor> constructor ([4a7b515](https://github.com/streamich/libreact/commit/4a7b515))
* 🐛 fix new TypeScript errors ([f3e9529](https://github.com/streamich/libreact/commit/f3e9529))

# [2.0.0](https://github.com/streamich/libreact/compare/v1.0.0...v2.0.0) (2018-06-09)


### Features

* bump version ([0f13e96](https://github.com/streamich/libreact/commit/0f13e96))


### BREAKING CHANGES

* bump version to v2

# [1.0.0](https://github.com/streamich/libreact/compare/v0.5.0...v1.0.0) (2018-06-09)


### Bug Fixes

* .tsx -> .ts so <WindowWidthQuery> is in build ([f2e6066](https://github.com/streamich/libreact/commit/f2e6066))
* 🐛 include React correctly ([36ed884](https://github.com/streamich/libreact/commit/36ed884))
* add state to <WidthSensor> ([73824ab](https://github.com/streamich/libreact/commit/73824ab))
* allow setting max distance ([89b910c](https://github.com/streamich/libreact/commit/89b910c))
* allow to set only boolean ([8e23e1c](https://github.com/streamich/libreact/commit/8e23e1c))
* fix .onElement event ([576e6ff](https://github.com/streamich/libreact/commit/576e6ff))
* fix <MediaSensor> event handling ([ac2d04e](https://github.com/streamich/libreact/commit/ac2d04e))
* fix build include .tsx files in output ([218e0d3](https://github.com/streamich/libreact/commit/218e0d3))
* fix CSS resets after dep update ([f64b2fa](https://github.com/streamich/libreact/commit/f64b2fa))
* fix gulpfile build location ([c74f736](https://github.com/streamich/libreact/commit/c74f736))
* fix gulpfile build paths ([0ea10f3](https://github.com/streamich/libreact/commit/0ea10f3))
* fix repo address ([a22254f](https://github.com/streamich/libreact/commit/a22254f))
* localStorage can throw, wrap in try block ([2ee63a7](https://github.com/streamich/libreact/commit/2ee63a7))
* make initial SizeSensor width Infinity ([f6c5787](https://github.com/streamich/libreact/commit/f6c5787))
* remove redundant isClient checks ([38c2fc9](https://github.com/streamich/libreact/commit/38c2fc9))
* remove unused debounce() function ([aed1ee9](https://github.com/streamich/libreact/commit/aed1ee9))
* rename .tsx -> .ts ([a7d6834](https://github.com/streamich/libreact/commit/a7d6834))
* reverse <ElectronOnly> logic ([e55607f](https://github.com/streamich/libreact/commit/e55607f))
* send event to onText callback ([5546bdc](https://github.com/streamich/libreact/commit/5546bdc))
* set initial media muted value ([55d9dd2](https://github.com/streamich/libreact/commit/55d9dd2))
* universal render interface requires 2 args ([422f677](https://github.com/streamich/libreact/commit/422f677))
* use .ts file ([e9860c4](https://github.com/streamich/libreact/commit/e9860c4))


### Features

* 🎸 add onChange event to <LocationSensor> ([fc72e6e](https://github.com/streamich/libreact/commit/fc72e6e))
* 🎸 Make new version of Route work ([77ebb0e](https://github.com/streamich/libreact/commit/77ebb0e))
* 🎸 refactor to create <Match> component ([0a02b2d](https://github.com/streamich/libreact/commit/0a02b2d))
* add [@with](https://github.com/with)Theme decorator ([936f99b](https://github.com/streamich/libreact/commit/936f99b))
* add <*Only> components ([9beb8e1](https://github.com/streamich/libreact/commit/9beb8e1))
* add <AfterDraf> component ([7fe4050](https://github.com/streamich/libreact/commit/7fe4050))
* add <AfterTimeout> component ([30b0e84](https://github.com/streamich/libreact/commit/30b0e84))
* add <Animation> component ([ac75ff5](https://github.com/streamich/libreact/commit/ac75ff5))
* add <Dimmable> component ([256c323](https://github.com/streamich/libreact/commit/256c323))
* add <Dimmable> renderOverlay() ([1779593](https://github.com/streamich/libreact/commit/1779593))
* add <DropArea> component ([8aad3d7](https://github.com/streamich/libreact/commit/8aad3d7))
* add <ErrorBoundary> component ([1fc9fd3](https://github.com/streamich/libreact/commit/1fc9fd3))
* add <ExitSensor> and its story ([80da3da](https://github.com/streamich/libreact/commit/80da3da))
* add <IdleSensor> component ([5189874](https://github.com/streamich/libreact/commit/5189874))
* add <Img> component ([2422dd4](https://github.com/streamich/libreact/commit/2422dd4))
* add <InlineWidthQuery> component ([d80ad66](https://github.com/streamich/libreact/commit/d80ad66))
* add <Overlay> implementation ([2ace6ac](https://github.com/streamich/libreact/commit/2ace6ac))
* add <Pluggable> ([79673e2](https://github.com/streamich/libreact/commit/79673e2))
* add <Render> component ([6a9f891](https://github.com/streamich/libreact/commit/6a9f891))
* add <RenderInterval> component ([4cf6afd](https://github.com/streamich/libreact/commit/4cf6afd))
* add <Ripple> implementation ([d2dc87f](https://github.com/streamich/libreact/commit/d2dc87f))
* add <Tween> component ([677d3e7](https://github.com/streamich/libreact/commit/677d3e7))
* add <Upload> component stub ([ebccc96](https://github.com/streamich/libreact/commit/ebccc96))
* add <WhenIdle> component ([3d39f38](https://github.com/streamich/libreact/commit/3d39f38))
* add <WindowWidthQuery> component ([41e4f3c](https://github.com/streamich/libreact/commit/41e4f3c))
* add <WindowWidthSensor> stories ([22a26f9](https://github.com/streamich/libreact/commit/22a26f9))
* add $ref to <Img> ([8e0b030](https://github.com/streamich/libreact/commit/8e0b030))
* add aria-modal and onClose event to <Modal> ([eea744c](https://github.com/streamich/libreact/commit/eea744c))
* add basic <OutsideClick> implementation ([2f213ef](https://github.com/streamich/libreact/commit/2f213ef))
* add basic <ScratchSensor> implementation ([1039d96](https://github.com/streamich/libreact/commit/1039d96))
* add basic <Slider> skeleton ([71a6315](https://github.com/streamich/libreact/commit/71a6315))
* add basic CssVars implementation ([b2bd30b](https://github.com/streamich/libreact/commit/b2bd30b))
* add blur to <Dimmable> ([e64f3bc](https://github.com/streamich/libreact/commit/e64f3bc))
* add blur() effect for <Modal> ([a048424](https://github.com/streamich/libreact/commit/a048424))
* add bonding for <ScratchSensor> ([cfe221b](https://github.com/streamich/libreact/commit/cfe221b))
* add context <Provider> and <Consumer> impl ([534eb27](https://github.com/streamich/libreact/commit/534eb27))
* add createLifecycleEvents() method ([1c39a73](https://github.com/streamich/libreact/commit/1c39a73)), closes [/gist.github.com/streamich/b983b248223f36105f064bc184fe0964#file-1-future-ideas-js-L3](https://github.com//gist.github.com/streamich/b983b248223f36105f064bc184fe0964/issues/file-1-future-ideas-js-L3)
* add delay prop to <Render> and <RenderInterv ([8994010](https://github.com/streamich/libreact/commit/8994010))
* add first .createRef() shim implementation ([b4ca13d](https://github.com/streamich/libreact/commit/b4ca13d))
* add first <ClassList> implementation ([c5ef077](https://github.com/streamich/libreact/commit/c5ef077))
* add first <WidthQuery> working story ([31fd5a6](https://github.com/streamich/libreact/commit/31fd5a6))
* add focus lock in <Modal> ([2142587](https://github.com/streamich/libreact/commit/2142587))
* add observable() ([c60b68a](https://github.com/streamich/libreact/commit/c60b68a))
* add onChange event to <Media> ([ee93593](https://github.com/streamich/libreact/commit/ee93593))
* add onClick to <Overlay> and <Modal> ([14604d2](https://github.com/streamich/libreact/commit/14604d2))
* add role=modal to <Overlay> ([875f204](https://github.com/streamich/libreact/commit/875f204))
* add stories and update deps ([340da5f](https://github.com/streamich/libreact/commit/340da5f))
* allow childless <WindowScrollSensor> ([24a9ec7](https://github.com/streamich/libreact/commit/24a9ec7))
* allow childless <WindowSizeSensor> ([2cd47be](https://github.com/streamich/libreact/commit/2cd47be))
* allow to display erorr on network err mock ([3191d1d](https://github.com/streamich/libreact/commit/3191d1d))
* basic <Upload> ([db581ce](https://github.com/streamich/libreact/commit/db581ce))
* bump version ([f8f0eaa](https://github.com/streamich/libreact/commit/f8f0eaa))
* create <Portal> ([6ea7435](https://github.com/streamich/libreact/commit/6ea7435))
* create life-cycles inversion ([4f317aa](https://github.com/streamich/libreact/commit/4f317aa))
* createRef() simplified and demo ([175429e](https://github.com/streamich/libreact/commit/175429e))
* export <View> from query component modules ([bcecf62](https://github.com/streamich/libreact/commit/bcecf62))
* expose onMouseMove event on <MouseSensor> ([d22dc80](https://github.com/streamich/libreact/commit/d22dc80))
* expose set() method of <Toggle> ([268b3af](https://github.com/streamich/libreact/commit/268b3af))
* fire onScratch event ([7fa8a51](https://github.com/streamich/libreact/commit/7fa8a51))
* first <Dimmer> implementation ([a851352](https://github.com/streamich/libreact/commit/a851352))
* first well working <Parallax> component ([eb7138a](https://github.com/streamich/libreact/commit/eb7138a))
* first working CssVars implementation ([8685a69](https://github.com/streamich/libreact/commit/8685a69))
* implement <ActiveSensor> ([48329ad](https://github.com/streamich/libreact/commit/48329ad))
* implement <FocusSensor> ([a6120e9](https://github.com/streamich/libreact/commit/a6120e9))
* implement <Group> component ([0969f7b](https://github.com/streamich/libreact/commit/0969f7b))
* implement <Modal> ([a8c2d07](https://github.com/streamich/libreact/commit/a8c2d07))
* implement <ShouldUpdate> ([b647edc](https://github.com/streamich/libreact/commit/b647edc))
* implement <WidthQuery> component ([f18bb73](https://github.com/streamich/libreact/commit/f18bb73))
* implement <WindowWidthSensor> ([e3e4ad2](https://github.com/streamich/libreact/commit/e3e4ad2))
* implement createState() ([d875c1f](https://github.com/streamich/libreact/commit/d875c1f)), closes [/gist.github.com/streamich/b983b248223f36105f064bc184fe0964#file-1-future-ideas-js-L17](https://github.com//gist.github.com/streamich/b983b248223f36105f064bc184fe0964/issues/file-1-future-ideas-js-L17)
* implement shouldUpdate() and pure() ([c54d8b7](https://github.com/streamich/libreact/commit/c54d8b7))
* implement withErrorBoundary() ([cb88c75](https://github.com/streamich/libreact/commit/cb88c75))
* improve <AfterDraf> ([f567d58](https://github.com/streamich/libreact/commit/f567d58))
* improve <Dimmer> component ([915238e](https://github.com/streamich/libreact/commit/915238e))
* improve <ExitSensor> ([6c74c16](https://github.com/streamich/libreact/commit/6c74c16))
* improve <Modal> focus lock and aria bindings ([a9c1c3f](https://github.com/streamich/libreact/commit/a9c1c3f))
* improve <Overlay> ([67186ca](https://github.com/streamich/libreact/commit/67186ca))
* improve <Slider> component ([9d6a698](https://github.com/streamich/libreact/commit/9d6a698))
* improve context typing and docs ([0c144c4](https://github.com/streamich/libreact/commit/0c144c4))
* improve cubic-bezier generator ([e1f9b6a](https://github.com/streamich/libreact/commit/e1f9b6a))
* improve easing functions ([454e092](https://github.com/streamich/libreact/commit/454e092))
* improve easing functions ([a702df5](https://github.com/streamich/libreact/commit/a702df5))
* improve sibling handling and joil foc option ([1f5701a](https://github.com/streamich/libreact/commit/1f5701a))
* improve TS types for <Img> ([f11f5c3](https://github.com/streamich/libreact/commit/f11f5c3))
* make <Img> component work ([ccaeb67](https://github.com/streamich/libreact/commit/ccaeb67))
* make <Parallax> extend <VieportScrollSensor> ([c6ab075](https://github.com/streamich/libreact/commit/c6ab075))
* make Async Bundle happy ([5237e18](https://github.com/streamich/libreact/commit/5237e18))
* make basic version of <Parallax> work ([6314ac6](https://github.com/streamich/libreact/commit/6314ac6))
* refactor as discussed ([2e59a95](https://github.com/streamich/libreact/commit/2e59a95))
* remove unused state from <Ripple> ([a549d2e](https://github.com/streamich/libreact/commit/a549d2e))
* rewrite <WindowWidthSensor> ([de3f4a5](https://github.com/streamich/libreact/commit/de3f4a5))
* use <span> for text node children <Dimmable> ([bfe09d6](https://github.com/streamich/libreact/commit/bfe09d6))
* use <WindowWidthSensor> in <WindowWidthQuery ([7eb4a6f](https://github.com/streamich/libreact/commit/7eb4a6f))
* use default onWidth ([6461b67](https://github.com/streamich/libreact/commit/6461b67))
* various and ErrorBoundary ([c576844](https://github.com/streamich/libreact/commit/c576844))


### Performance Improvements

* remove unnecessary regexp ([f994f5d](https://github.com/streamich/libreact/commit/f994f5d))


### Tests

* 💍 fix tests after context refactor and Enzyme update ([f142450](https://github.com/streamich/libreact/commit/f142450))


### BREAKING CHANGES

* release v2
* moved to React 16 context API
