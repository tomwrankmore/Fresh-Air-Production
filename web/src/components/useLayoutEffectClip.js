useLayoutEffect(() => {
    let ctx = gsap.context(() => {
        
    }, ref);
    return () => ctx.revert()
  }, [])

useLayoutEffect(() => {
  let mm = gsap.matchMedia(ref);

  mm.add("(min-width: 675px)", () => {
    let split = SplitText.create(".box", { type: "chars" });
    let smoother = ScrollSmoother.create({
      wrapper: ref.current.parentNode,
      content: ref.current,
      smooth: 1.5,
      smoothTouch: 0
    });

    gsap.from(split.chars, {
      y: 200,
      stagger: 0.15,
      duration: 1.5,
      ease: "back"
    });

    // when the matchMedia doesn't match anymore, make sure we revert the text
    return () => {
      split.revert();
      smoother.kill();
    };
  });

  return () => mm.revert();
}, []);