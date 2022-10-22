// Make an array of objects representing the questions, the answer, and their SIMP status
/* The format of a question object will be
        {
            "preview"  : "Question 2"
            "question" : "Do you dream of your crush every day?",
            "answers"  : [
                        {"response": "Yes, and we always end up married with multiple children.",
                        "status" : "simp"},

                        {"response": "Occasionally I do, but I know it's just a dream and keep it real.",
                        "status": "beta"},

                        {"response": "In my dreams I am the crush of multiple women who yearn for my vital seed.",
                        "status": "alpha"},

                        {"response": "Every time I do, I violently wake up and remind myself to stop yearning for delusions.",
                        "status": "dark"};

                        ]
        } */

// Make a list for questions and answers
var qAndAs = [

    {
        "preview"  : "Question 1",
        "question" : "If you see a pretty random chick walking towards you, you ...",
        "answers"  : [
                    {
                        "response" : "Give her $5000 bucks for having illuminated my existence with her radiant beauty.",
                        "status"   : "simp"
                    },

                    {
                        "response" : "Tell her she should be a super model.",
                        "status"   : "beta"
                    },

                    {
                        "response" : "Slightly look at her while she is front of me, but quickly turn my head to look at her back once she passes me.",
                        "status"   : "alpha"
                    },

                    {
                        "response" : "Don't pay attention to her.",
                        "status"   : "dark"
                    }
                ]
    },

    {
        "preview"  : "Question 2",
        "question" : "Do you dream of your crush every day?",
        "answers"  : [
                    {
                        "response" : "In my dreams I am the crush of multiple women who yearn for my seed.",
                        "status"   : "alpha"  
                    },

                    {
                        "response" : "Every time I do, I violently wake up and remind myself to stop yearning for delusions.",
                        "status"   : "dark" 
                    },

                    {
                        "response" : "Occasionally I do, but I know it's just a dream and keep it real.",
                        "status"   : "beta"
                    },

                    {
                        "response" : "Yes, and we always end up married with multiple children.",
                        "status"   : "simp"
                    }
                ]
    },

    {
        "preview"  : "Question 3",
        "question" : "What's usually on your social media feed?",
        "answers"  : [
                    {
                        "response" : "Posts of pick-up artists that teach me how to be more attractive.",
                        "status"   : "beta"
                    },

                    {
                        "response" : "I only use social media to answer to women's requests of hanging out.",
                        "status"   : "alpha"
                    },

                    {
                        "response" : "I watch posts that teach men how to be independent and live happily on their own.",
                        "status"   : "dark"
                    },

                    {
                        "response" : "I spend everyday watching the newest posts of my favorite e-girls. I love them all!",
                        "status"   : "simp"
                    }
        ]
    },

    {
        "preview"  : "Question 4",
        "question" : "What do you do when you like a chick?",
        "answers"  : [
                    {
                        "response" : "I consider this a distraction. So I focus on other things until I my feelings dissolve.",
                        "status"   : "dark"
                    },

                    {
                        "response" : "I kindly ask her out on a date and hope for everything to go well.",
                        "status"   : "beta"
                    },

                    {
                        "response" : "I spend all of my energy and resources to show my princess I can't leave without her.",
                        "status"   : "simp"
                    },

                    {
                        "response" : "I only start liking women after I have sex with them.",
                        "status"   : "alpha"
                    }
        ]
    },

    {
        "preview"  : "Question 5",
        "question" : "What do women mean to you?",
        "answers"  : [
                    {
                        "response" : "Potential intimate partners to form long-term relationships and families.",
                        "status"   : "beta"
                    },

                    {
                        "response" : "Angels who came from heaven to give my life meaning with her glorious existence.",
                        "status"   : "simp"
                    },

                    {
                        "response" : "They may be a strong distractive agent that inhibits men from achieving their goals.",
                        "status"   : "dark"
                    },

                    {
                        "response" : "Lovely people to hang out with and to have sex with",
                        "status"   : "alpha"
                    }
                ]
    },

    {
        "preview"  : "Question 6",
        "question" : "How would you like to be treated by women?",
        "answers"  : [
                    {
                        "response" : "They already treat me exactly as I want to.",
                        "status"   : "alpha"
                    },

                    {
                        "response" : "I'd like them to give me more chances to show I am a good match.",
                        "status"   : "beta"
                    },

                    {
                        "response" : "It's not one of my priorities to care about that.",
                        "status"   : "dark"
                    },

                    {
                        "response" : "Just one sincere smile from them is enough to make me happy forever.",
                        "status"   : "simp"
                    }
        ]
    },

    {
        "preview"  : "Question 7",
        "question" : "What do you do when you have a heavy argument with your girlfriend?",
        "answers"  : [
                    {
                        "response"  : "I try to get her point to and comprehend her to return to harmony.",
                        "status"    : "beta"
                    },

                    {
                        "response"  : "That'd never happen. Any man who has arguments with her girlfriend deserves to die.",
                        "status"    : "simp"
                    },

                    {
                        "response"  : "If she bothers me too much I cut off the relationship right there.",
                        "status"    : "dark"
                    },

                    {
                        "response"  : "When my current girlfriend nags me too much, I just replace her for another one.",
                        "status"    : "alpha"
                    }
        ]
    },

    {
        "preview"  : "Question 8",
        "question" : "The woman you are dating tells you she's a single mom. You ...",
        "answers"   : [
                    {
                        "response" : "Immediately cut off every kind of contact with her.",
                        "status"   : "dark"
                    },

                    {
                        "response" : "I really don't care much. As soon as I'm done with her I'll date other women.",
                        "status"   : "alpha"
                    },

                    {
                        "response" : "I tell her that's not a problem and go on with the relationship as usual.",
                        "status"   : "beta"
                    },

                    {
                        "response"  : "Buy the best gifts for her children so she sees me as a good provider and will never get away from me.",
                        "status"    : "simp"
                    }
        ]
    },

    {
        "preview"  : "Question 9",
        "question" : "What do you usually spend your money on?",
        "answers"  : [
                    {
                        "response"  : "I spend a lot of money on gifts for girls I know and on donations for my favorite e-girls",
                        "status"    : "simp"
                    },

                    {
                        "response"  : "I spend my money on buying luxurious items that may pick up women's attention",
                        "status"    : "beta"
                    },

                    {
                        "response"   : "I spend my money on parties, discotheques, bars and motels.",
                        "status"     : "alpha"
                    },

                    {
                        "response"  :  "I spend most of my money on personal investments and my hobbies.",
                        "status"    : "dark"
                    }
        ]
    },

    {
        "preview"  :  "Question 10",
        "question" :  "What do you do when a women tells you she's sad and lonely?",
        "answers"  : [
                    {
                        "response"  :  "I do everything in my power to recover her joy. I'd even die for her sake.",
                        "status"    : "simp"
                    },

                    {
                        "response"  : "I leave her alone. Sad and lonely women are not good to sleep with.",
                        "status"    : "alpha"
                    },

                    {
                        "response"  : "I just give her brief advice on how to feel better and continue with my own thing.",
                        "status"    : "dark"
                    },

                    {
                        "response"  : "I invite her for a coffee so she could tell me more about her issues.",
                        "status"    : "beta"
                    }
        ]
    }
];