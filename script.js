// Team Members Section
const teamMembers = [
    {
        id: "uriRaz",
        title: "CEO",
        bio: "Uri Raz has served as RoxStar's Founder and Executive Chairman since its inception in 2009. Uri founded AppStream (acquired by Symantec) & Dyyno, establishing himself as a prominent figure in the tech industry, and has a proven track record of entrepreneurial success."
    },
    {
        id: "yanivSchwartz",
        title: "Chief Revenue Officer",
        bio: ""
    },
    {
        id: "dorIsseroff",
        title: "Chief Operations Officer",
        bio: ""
    },
    {
        id: "vasylStrutynski",
        title: "VP R&D",
        bio: ""
    }
];

const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
let currentMemberIndex = 0;

function showMemberInfo(memberId) {
    const memberInfo = document.getElementById(memberId + 'Info');
    if (memberInfo) {
        memberInfo.style.display = "block"; // Show the info
    }
}

function hideMemberInfo(memberId) {
    const memberInfo = document.getElementById(memberId + 'Info');
    if (memberInfo) {
        memberInfo.style.display = "none"; // Hide the info
    }
}

function showMember(index) {
    const member = teamMembers[index];
    const img = document.getElementById(member.id);
    if (img) {
        img.addEventListener('click', () => {
            showMemberInfo(member.id); // Show info on click
        });
        img.addEventListener('mouseout', () => {
            hideMemberInfo(member.id); // Hide info on mouse out
        });

        // Show the first team member's info by default
        if (index === 0) {
            showMemberInfo(member.id);
        }
    }
}

function nextMember() {
    currentMemberIndex = (currentMemberIndex + 1) % teamMembers.length;
    showMember(currentMemberIndex);
}

function previousMember() {
    currentMemberIndex = (currentMemberIndex - 1 + teamMembers.length) % teamMembers.length;
    showMember(currentMemberIndex);
}

// Show the initial team member
showMember(currentMemberIndex);

// Event listeners for arrows
if (nextArrow) {
    nextArrow.addEventListener('click', nextMember);
}
if (prevArrow) {
    prevArrow.addEventListener('click', previousMember);
}

// Milestones Section
const milestones = document.querySelectorAll('.milestone');

function activateMilestones() {
    milestones.forEach((milestone, index) => {
        setTimeout(() => {
            milestone.classList.add('active');
        }, index * 300); // Adjusted delay for faster cascading effect
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkScroll() {
    milestones.forEach(milestone => {
        if (isElementInViewport(milestone)) {
            activateMilestones();
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll(); // Initial check on page load
