// How node map work:

export function Dijkstra_node_onestep(connection, info, amount) {
    if (info.start === -1 || info.end === -1) {
        console.log("missing start/end");
        return info
    }

    if (info.runState === "done") {
        return info
    }

    let copy = {...info} // Basically a copy of the original info board, because i don't even know

    // If the finding is done, and there's a route to the end
    if (copy.runState === "done_with_end") {
        copy.H[copy.end] = true
        if (copy.backtrack === -1) {
            copy.backtrack = copy.P[copy.end]
        }
        else {
            copy.backtrack = copy.P[copy.backtrack]
        }

        if (copy.start === copy.backtrack) {
            copy.H[copy.backtrack] = true
            copy.runState = "done"
            return copy
        }

        copy.H[copy.backtrack] = true
        copy.indivInfo[copy.backtrack].push("highlight")

        return copy
    }

    // If there are nothing in queue -> basically not initialized
    if (copy.Q.length === 0) {
        if (!copy.V[copy.start]) {
            copy.Q.push({ id: copy.start, w: 0 })
            copy.W[copy.start] = 0
            copy.P[copy.start] = copy.start
        }

        // If there's still nothing in queue => oop no place to go :< (For node map this probably won't happen that much)
        else {
            copy.runState = "done"
            return copy
        }
    }

    //copy.Q.sort((first, second) => { return first.w > second.w })

    // Node here represent the next running node
    let node = copy.Q.shift()
    while (copy.V[node.id]) {
        if (info.Q.length === 0) {
            copy.runState = "done"
            return copy
        }
        node = copy.Q.shift()
    }

    // Add the "visited" to the choosen node
    copy.P[node.id] = node.p
    copy.indivInfo[node.id].push("visited")

    // Change the choosen node visit to true
    copy.V[node.id] = true
    copy.VCount++

    if (copy.end === node.id) {
        copy.runState = "done_with_end"
        return copy
    }

    // Due to array sorting being a huge ass, decided to just make a scuffed priority queue instead
    for (let i = 0, n = connection[node.id].length; i < n; i++) {
        if (!copy.V[i] && connection[node.id][i] !== 0 && copy.W[i] > (copy.W[node.id] + connection[node.id][i])) {
            copy.W[i] = copy.W[node.id] + connection[node.id][i]

            let j = 0
            while (copy.Q.length > j && copy.W[i] > copy.Q[j].w) j++
            
            copy.Q.splice(j, 0, { id: i, w: copy.W[i], p: node.id })
        }
    }

    return copy
}