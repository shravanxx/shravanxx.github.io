""""
### Work flow###

1-Take input from user.
2-Take input from computer.
3-print result

condition-A
Rock
Rock-Rock = Tie
Rock-paper = Paper win
Rock-scissor = Rock win

condition-B
Scissor
Scissor-Scissor= Tie
Scissor-Rock = Rock win
Scissor-Paper = Scissor win

condition-c
paper
Paper-paper = Tie
Paper-Scissor = Scissor win
Paper-Rock = Paper win

print result
"""

import random
Total_condition=["rock","paper","cissor"]
user_input=input("Enter your move : ").strip().lower()
comp_input=random.choice(Total_condition)

print(f"You choosed = {user_input}\ncomputer_choosed = {comp_input}")


if user_input == comp_input:
    print("Tie")

elif user_input =="rock":
    if comp_input == "paper":
        print("computer win")
    else:
        print("You win")


elif user_input =="scissor":
    if comp_input == "paper":
        print("You win")
    else:
        print("computer win")

elif user_input =="paper":
    if comp_input == "scissor":
        print("computer win")
    else:
        print("You win") 

        




 
    





